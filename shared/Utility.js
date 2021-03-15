//
// Copyright 2020 Autodesk
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// const { CodeTwoTone } = require("@material-ui/icons");
import { _ } from "lodash";
import uuid from "uuid";

function uuidv4() {
    return uuid.v4();
}

var Utility = {};

Utility.timeEqual = function (a, b) {
    return a && b && a.getTime() == b.getTime();
};

/**
 * Converts a Date object into equivalent Epoch seconds
 * @param {Date} time A Date object
 * @returns {number} Time value expressed in Unix Epoch seconds
 */
Utility.getTimeInEpochSeconds = function (time) {
    const epochSeconds = new Date(time).getTime() / 1000.0;
    return ~~epochSeconds; // Equivalent to Math.floor()
};

/**
 * Gets the lower and upper bounds of a number series, padded by
 * the given percentage on both ends.
 *
 * @param {number[]} series The input array consisting numbers
 * @param {number} percentage The percentage to pad the range with.
 * For example, 15 means 15 percent padding on both the lower and
 * upper bounds of the number range.
 *
 * @returns {{ min: number, max: number }} The padding value range.
 */
Utility.getPaddedRange = function (series, percentage = 0) {
    let min = series[0] || Infinity;
    let max = series[0] || -Infinity;

    series.forEach((value) => {
        if (value != null) {
            min = value < min ? value : min;
            max = value > max ? value : max;
        }
    });

    const padding = ((max - min) * percentage) / 100.0;

    return {
        min: Math.floor(min - padding),
        max: Math.ceil(max + padding),
    };
};

/**
 * Gets the index of an entry in the array whose value is the
 * closest to the given value.
 *
 * @param {number[]} entries The input array consisting numbers
 * @param {number} entry The value for which the index of the
 * closest entry is to be determined.
 *
 * @returns {number} The index of an entry in the array whose
 * value is the closest to 'entry'.
 */
Utility.findClosestIndex = function (entries, entry) {
    let result = 0;
    let diff = Math.abs(entries[0] - entry);

    for (let i = 1; i < entries.length; ++i) {
        const d = Math.abs(entries[i] - entry);
        if (d < diff) {
            result = i;
            diff = d;
        }
    }

    return result;
};

Utility.getClosestValue = function (av, entry, propName = "avgValues") {
    let tsValues = av.tsValues;
    let values = av[propName];

    let smallSide = null;
    let largeSide = null;
    let smallSideIndex;
    let largeSideIndex;

    for (var i = 0; i < tsValues.length; i++) {
        if (tsValues[i] <= entry && values[i] != null) {
            smallSide = values[i];
            smallSideIndex = i;
        } else if (tsValues[i] > entry && values[i] != null) {
            largeSide = values[i];
            largeSideIndex = i;
            break;
        }
    }

    if (smallSide != null && largeSide != null) {
        let sTime = tsValues[smallSideIndex];
        let lTime = tsValues[largeSideIndex];
        let p = (entry - sTime) / (lTime - sTime);
        return smallSide * (1 - p) + largeSide * p;
    } else {
        return smallSide || largeSide || 0;
    }
};

Utility.clamp = function (value, lower, upper) {
    if (value == undefined) {
        return lower;
    }

    if (value > upper) {
        return upper;
    } else if (value < lower) {
        return lower;
    } else {
        return value;
    }
};

/**
 * Convert ShadingData to DigitalTwinGraph
 * @param {SurfaceShadingData} surfaceShadingData Data tree
 */
Utility.convertSurfaceShadingDataToDigitalTwinGraph = (surfaceShadingData) => {
    surfaceShadingData;
    let twinGraph = {
        digitalTwinsFileInfo: {
            fileVersion: "1.0.0",
        },
        digitalTwinsGraph: {
            digitalTwins: [],
            relationships: [],
        },
        digitalTwinsModels: [],
    };
    function levelToType(level) {
        let levelType = "Building";
        if (level === 1) levelType = "Floor";
        if (level === 2) levelType = "Room";
        if (level === 3) levelType = "Sensor";
        return levelType;
    }
    function generateModel(curr, level) {
        let levelType = levelToType(level);
        let model = {
            "@id": `dtmi:com:${levelType};1`,
            "@type": "Interface",
            "@context": ["dtmi:dtdl:context;2"],
            displayName: levelType,
            contents: [
                {
                    "@type": "Property",
                    name: "name",
                    schema: "string",
                },
            ],
        };
        if (curr.types) {
            for (let type of curr.types) {
                model.contents.push({
                    "@type": "Telemetry",
                    name: type.replace("₂", "2"),
                    schema: "double",
                });
            }
        }
        return model;
    }
    function getOrCreateModel(curr, level) {
        let levelType = levelToType(level);
        let id = `dtmi:com:${levelType};1`;
        if (
            !_.find(twinGraph.digitalTwinsModels, (m) => {
                return m["@id"] === id;
            })
        ) {
            let currModel = generateModel(curr, level);
            if (level < 3) {
                currModel.contents.push({
                    "@type": "Relationship",
                    name: `${levelToType(level + 1).toLowerCase()}s`,
                });
            }
            twinGraph.digitalTwinsModels.push(currModel);
        }
        return id;
    }
    function createRelationship(srcId, targetId, relationship) {
        if (
            !_.find(twinGraph.digitalTwinsGraph.digitalTwins, (m) => {
                return m["$dtId"] === targetId;
            })
        ) {
            console.warn("Missing target " + targetId);
        }
        twinGraph.digitalTwinsGraph.relationships.push({
            $relationshipId: uuidv4(),
            $sourceId: srcId,
            $relationshipName: relationship,
            $targetId: targetId,
        });
    }
    function createTwin(dtId, modelId, name) {
        if (
            !_.find(twinGraph.digitalTwinsGraph.digitalTwins, (m) => {
                return m["$dtId"] === dtId;
            })
        ) {
            twinGraph.digitalTwinsGraph.digitalTwins.push({
                $dtId: dtId,
                $metadata: {
                    $model: modelId,
                },
                name: name,
            });
        }
    }
    function idToDtId(node) {
        if (node.id == undefined) return uuidv4();
        // Remove invalid ID Characters
        // Forward slash (/) is valid but will be re-encoded to a separate value
        return node.id.replaceAll(" ", "-").replaceAll("[", "(").replaceAll("]", ")").replaceAll("/", "-");
    }
    function traverse(root, level = 0) {
        let modelId = getOrCreateModel(root, level);
        const parentDtId = idToDtId(root);
        createTwin(parentDtId, modelId, root.id);
        if (root.isGroup) {
            for (let child of root.children) {
                let childModelId = getOrCreateModel(child, level + 1, modelId);
                const childDtId = idToDtId(child);
                createTwin(childDtId, childModelId, child.id);
                createRelationship(parentDtId, childDtId, `${levelToType(level + 1).toLowerCase()}s`);
                traverse(child, level + 1);
            }
        } else {
            for (let child of root.shadingPoints) {
                let childModelId = getOrCreateModel(child, level + 1, modelId);
                const childDtId = idToDtId(child);
                createTwin(childDtId, childModelId, child.id);
                createRelationship(parentDtId, childDtId, `${levelToType(level + 1).toLowerCase()}s`);
            }
        }
    }
    traverse(surfaceShadingData);
    return twinGraph;
};

module.exports = Utility;

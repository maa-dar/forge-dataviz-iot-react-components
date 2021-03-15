
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
import circleSvg from "../../assets/images/circle.svg";
import circleHighlightedSvg from "../../assets/images/circle_highlighted.svg";
import temperatureSvg from "../../assets/images/temperature_property.svg";
import humiditySvg from "../../assets/images/humidity_property.svg";
import co2Svg from "../../assets/images/co2_property.svg";

export const SpriteSize = 24;

export const SensorStyleDefinitions = {
    default: {
        url: circleSvg,
        highlightedUrl: circleHighlightedSvg,
        color: 0xffffff,
        highlightedColor: 0xffffff,
        //You may use this instead of highlightedUrl and highlightedColor to simply color over the regular url image
        // highlightedColor: 0xa1c5ff,
    },
};

/**
 * A map that maps a property ID with its corresponding color stop values.
 * This mapping is used for both heatmap rendering, as well as for heatmap
 * slider background color. See registerSurfaceShadingColors API for usage
 * details.
 */
export const PropIdGradientMap = {
    Temperature: [0x0000ff, 0x00ff00, 0xffff00, 0xff0000],
    Humidity: [0x00f260, 0x0575e6],
    "CO₂": [0x1e9600, 0xfff200, 0xff0000],
};

export const PropertyIconMap = {
    Temperature: temperatureSvg,
    Humidity: humiditySvg,
    "CO₂": co2Svg,
}
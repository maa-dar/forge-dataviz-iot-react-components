import React, { useRef, useEffect, memo, useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { Rnd } from 'react-rnd';
import TreeView from '@material-ui/lab/TreeView';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TreeItem from '@material-ui/lab/TreeItem';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Checkbox from '@material-ui/core/Checkbox';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Popper from '@material-ui/core/Popper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import LayersIcon from '@material-ui/icons/Layers';
import SvgIcon from '@material-ui/core/SvgIcon';
import * as darkGrayHighDensityTheme from '@hig/theme-data/build/esm/darkGrayHighDensityTheme';
import 'lodash';
import 'uuid';
import { TimeSlider } from 'chronos-etu';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import io from 'socket.io-client';
import { EventType, DeviceModel, DateTimeSpan, Session, RestApiDataAdapter, AzureDataAdapter } from 'forge-dataviz-iot-data-modules/client';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Draggable from 'react-draggable';
import { Controlled } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * @component
 * Component for rendering LMV
 * @param {Object} props
 * @param {("AutodeskProduction"|"AutodeskStaging"|"MD20ProdUS"|"MD20ProdEU")} [props.env] Forge API environment
 * @param {Function} props.getToken Returns the Forge API token to access LMV
 * @param {"derivativeV2"|"derivativeV2_EU"|"modelDerivativeV2"|"fluent"|"D3S"|"D3S_EU"} [props.api] Default = "derivativeV2". Please refer to LMV documentation for more information.
 * @param {string} props.docUrn Document URN of model
 * @param {OnModelLoaded} [props.onModelLoaded] Callback function invoked when the model has loaded
 * @param {OnViewerInitialized} [props.onViewerInitialized] Callback function invoked when LMV has been intialized
 * @param {string[]} [props.extensions] List of extension ids forwarded to viewer config to load.
 * @param {Object.<string, Object>} [props.disabledExtensions] Default extensions to prevent being loaded.
 * @param {string} [props.phaseName] phaseName of view to load in scene.
 * @param {string} [props.guid] guid of BubbleNode to load in scene.
 * @param {string} [props.viewableID] viewableID of BubbleNode to load in scene.
 * @param {number} [props.geomIndex] Index of geometry to load in scene.
 * @param {Boolean} [props.skipHiddenFragments] Boolean to specify if hidden fragments should be skipped (Default: false,
 * Hidden fragments are required for heatmaps in rooms, only applicable to SVF2)
 * @param {Object} [props.viewerOptions] Options object to forward to Autodesk.Viewing.Initializer
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.Viewer
 */

function Viewer(props) {
  var viewerRef = useRef(null);
  var viewerDomRef = useRef(null);

  function onModelLoaded(event) {
    var viewer = viewerRef.current;
    var av = Autodesk.Viewing;
    viewer.removeEventListener(av.GEOMETRY_LOADED_EVENT, onModelLoaded);

    if (props.onModelLoaded) {
      props.onModelLoaded(viewer, event);
    }
  }
  /**
   * Initializes LMV.
   *
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.Viewer#initializeViewer
   * @private
   */


  function initializeViewer() {
    var viewerOptions = props.viewerOptions;
    var options = Object.assign({}, viewerOptions, {
      env: props.env,
      api: props.api || "derivativeV2",
      // for models uploaded to EMEA change this option to 'derivativeV2_EU'
      getAccessToken: function () {
        var _getAccessToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(onTokenReady) {
          var token, timeInSeconds;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return props.getToken();

                case 2:
                  token = _context.sent;
                  timeInSeconds = 3600; // Use value provided by Forge Authentication (OAuth) API

                  onTokenReady(token, timeInSeconds);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function getAccessToken(_x) {
          return _getAccessToken.apply(this, arguments);
        }

        return getAccessToken;
      }()
    });
    Autodesk.Viewing.Initializer(options, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var extensionsToLoad, extensionsWithConfig, extensionsWithoutConfig, key, config, viewer, startedCode, av;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              extensionsToLoad = props.extensions;
              extensionsWithConfig = [];
              extensionsWithoutConfig = [];

              for (key in extensionsToLoad) {
                config = extensionsToLoad[key];

                if (Object.keys(config).length === 0) {
                  extensionsWithoutConfig.push(key);
                } else {
                  extensionsWithConfig.push(key);
                }
              }

              viewer = new Autodesk.Viewing.GuiViewer3D(viewerDomRef.current, {
                extensions: extensionsWithoutConfig,
                disabledExtensions: props.disabledExtensions || {}
              });
              extensionsWithConfig.forEach(function (ext) {
                viewer.loadExtension(ext, extensionsToLoad[ext]);
              });
              viewerRef.current = viewer;
              startedCode = viewer.start(undefined, undefined, undefined, undefined, options);

              if (!(startedCode > 0)) {
                _context2.next = 11;
                break;
              }

              console.error("Failed to create a Viewer: WebGL not supported.");
              return _context2.abrupt("return");

            case 11:
              av = Autodesk.Viewing;
              viewer.addEventListener(av.GEOMETRY_LOADED_EVENT, onModelLoaded, {
                once: true
              });
              loadModel(viewer, props.docUrn);

              if (props.onViewerInitialized) {
                props.onViewerInitialized(viewer);
              }

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  }
  /**
   * Loads the specified model into the viewer.
   *
   * @param {Object} viewer Initialized LMV object
   * @param {string} documentId Document URN of the model to be loaded
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.Viewer#loadModel
   * @private
   */


  function loadModel(viewer, documentId) {
    function onDocumentLoadSuccess(viewerDocument) {
      // viewerDocument is an instance of Autodesk.Viewing.Document
      var bubbleNode = viewerDocument.getRoot();
      var defaultModel;

      if (props.phaseName) {
        defaultModel = bubbleNode.getMasterView(props.phaseName);
      } else if (props.guid) {
        defaultModel = bubbleNode.findByGuid(props.guid);
      } else if (props.viewableID) {
        var results = bubbleNode.search({
          viewableID: props.viewableID
        });

        if (results && results.length) {
          defaultModel = results[0];
        }
      } else if (props.geomIndex) {
        var geoms = bubbleNode.search({
          type: "geometry"
        });

        if (geoms.length) {
          if (props.geomIndex < 0 || props.geomIndex >= geoms.length) {
            console.warn("GeometryIndex Error: Invalid geometry index.");
          }

          var index = Math.min(Math.max(props.geomIndex, 0), geoms.length - 1); // Ensure index is valid.

          defaultModel = geoms[index];
        }
      }

      if (!defaultModel) defaultModel = bubbleNode.getDefaultGeometry(true);
      var skipHiddenFragments = props.skipHiddenFragments || false;
      viewer.loadDocumentNode(viewerDocument, defaultModel, {
        keepCurrentModels: true,
        skipHiddenFragments: skipHiddenFragments
      }); // modify the preference settings, since ghosting is causing heavy z-fighting with the room geometry
      // it would be good we turn it off

      viewer.prefs.set("ghosting", false);
    }

    function onDocumentLoadFailure() {
      console.error("Failed fetching Forge manifest");
    }

    if (documentId) {
      Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
    } else {
      props.eventBus.dispatchEvent({
        type: "VIEWER_READY",
        data: {
          viewer: viewer
        }
      });
    }
  }

  useEffect(function () {
    initializeViewer();
    return function cleanUp() {
      if (viewerRef.current) {
        viewerRef.current.finish();
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "forgeViewer",
    ref: viewerDomRef
  });
}
Viewer.displayName = "Viewer";

//
// Copyright 2021 Autodesk
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
// This file contains options that are deemed necessary for the reference
// application. ECharts component is highly configurable with the vast
// options it provides, more can be added from the original documentation:
//
//      https://echarts.apache.org/en/option.html
//

/**
 * The base class for data series types used in the Reference App.
 * @memberof Autodesk.DataVisualization.UI.DataChart
 * @alias Autodesk.DataVisualization.UI.DataChart.DataChartSeriesBase
 */
var DataChartSeriesBase = /*#__PURE__*/function () {
  /**
   * Constructs an instance of DataChartSeriesBase object. See https://echarts.apache.org/en/option.html#series for more information.
   *
   * @param {string} type The type of the chart, e.g. "line"
   * @param {any[]} data An array of values or objects.
   */
  function DataChartSeriesBase(type, data) {
    _classCallCheck(this, DataChartSeriesBase);

    this._data = data;
    this._type = type;
  }
  /**
   * The name of the series to be displayed on
   * the tool-tip, or displayed as filter names in legend.
   *
   * @param {string} value
   */


  _createClass(DataChartSeriesBase, [{
    key: "name",
    set: function set(value) {
      this._name = value;
    }
    /**
     * The name of the series if stacking of series
     * is desirable. Two series will be stack above one another if they
     * have the same stack name.
     *
     * @param {string} value
     */

  }, {
    key: "stack",
    set: function set(value) {
      this._stack = value;
    }
    /**
     * The style of the symbol point.
     *
     * @param {ItemStyle} value
     */

  }, {
    key: "itemStyle",
    set: function set(value) {
      this._itemStyle = value;
    }
    /**
     * Generates the options object representing the Echarts configurations.
     *
     * @memberof Autodesk.DataVisualization.UI.DataChart
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartSeriesBase#generateOptions
     */

  }, {
    key: "generateOptions",
    value: function generateOptions() {
      return {
        name: this._name,
        type: this._type,
        data: this._data,
        stack: this._stack,
        itemStyle: this._itemStyle
      };
    }
  }]);

  return DataChartSeriesBase;
}();
/**
 * The broken line series type. Broken line chart relates all of the data points with broken lines
 * which are used to show the trend of changing data. Can be used with rectangular or polar coordinates.
 *
 * @augments DataChartSeriesBase
 * @memberof Autodesk.DataVisualization.UI.DataChart
 * @alias Autodesk.DataVisualization.UI.DataChart.DataChartSeriesLine
 */

var DataChartSeriesLine = /*#__PURE__*/function (_DataChartSeriesBase) {
  _inherits(DataChartSeriesLine, _DataChartSeriesBase);

  var _super = _createSuper(DataChartSeriesLine);

  /**
   * Constructs an instance of DataChartSeriesBase object.
   *
   * @param {any[]} data An array of values or objects.
   */
  function DataChartSeriesLine(data) {
    _classCallCheck(this, DataChartSeriesLine);

    return _super.call(this, "line", data);
  }
  /**
   * @param {LineStyle} value
   */


  _createClass(DataChartSeriesLine, [{
    key: "lineStyle",
    set: function set(value) {
      this._lineStyle = value;
    }
    /**
     * @param {boolean} value Set this to false to prevent the
     * animation effect when the mouse is hovering over a symbol.
     */

  }, {
    key: "hoverAnimation",
    set: function set(value) {
      this._hoverAnimation = value;
    }
    /**
     * @param {boolean} value Whether to show symbol on tooltip.
     */

  }, {
    key: "showSymbol",
    set: function set(value) {
      this._showSymbol = value;
    }
    /**
     * @param {"circle"|"rect"|"roundRect"|"triangle"|"diamond"|"pin"|"arrow"|"none"} value Symbol icon of line point.
     */

  }, {
    key: "symbol",
    set: function set(value) {
      this._symbol = value;
    }
    /**
     * @param {number} value Line point symbol icon size.
     */

  }, {
    key: "symbolSize",
    set: function set(value) {
      this._symbolSize = value;
    }
    /**
     * @param {AreaStyle} value The area style options.
     */

  }, {
    key: "areaStyle",
    set: function set(value) {
      this._areaStyle = value;
    }
    /**
     * Generates the options object representing the Echarts configurations.
     *
     * @memberof Autodesk.DataVisualization.UI.DataChart
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartSeriesLine#generateOptions
     */

  }, {
    key: "generateOptions",
    value: function generateOptions() {
      var options = _get(_getPrototypeOf(DataChartSeriesLine.prototype), "generateOptions", this).call(this);

      options.lineStyle = this._lineStyle;
      options.hoverAnimation = this._hoverAnimation;
      options.showSymbol = this._showSymbol;
      options.symbol = this._symbol;
      options.symbolSize = this._symbolSize;
      options.areaStyle = this._areaStyle;
      return options;
    }
  }]);

  return DataChartSeriesLine;
}(DataChartSeriesBase);

/**
 * X-axis options for a chart to be added to a {@link DataChartOptions} object
 * @memberof Autodesk.DataVisualization.UI.DataChart
 * @alias Autodesk.DataVisualization.UI.DataChart.DataChartXAxis
 */

var DataChartXAxis = /*#__PURE__*/function () {
  /**
   * Constructs an instance of DataChartXAxis object.
   * @param {any[]} data An array of input values
   * @param {"value"|"category"|"time"|"log"} type The data type of the x-axis.
   */
  function DataChartXAxis(data, type) {
    _classCallCheck(this, DataChartXAxis);

    this._data = data;
    this._type = type || "category";
  }
  /**
   * @function
   * @param {PointerLabelFormatter} callback The callback function that
   * &nbsp;will be invoked when the chart requires a pointer label string.
   * @memberof Autodesk.DataVisualization.UI.DataChart
   * @alias Autodesk.DataVisualization.UI.DataChart.DataChartXAxis#pointerFormatter
   */


  _createClass(DataChartXAxis, [{
    key: "pointerFormatter",
    set: function set(callback) {
      this._pointerFormatter = callback;
    }
    /**
     * Generates the options object representing the Echarts configurations.
     * @memberof Autodesk.DataVisualization.UI.DataChart
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartXAxis#generateOptions
     */

  }, {
    key: "generateOptions",
    value: function generateOptions() {
      var results = {
        type: this._type,
        axisLabel: {
          color: "#979797"
        },
        axisPointer: {
          label: {
            formatter: this._pointerFormatter
          }
        },
        splitLine: {
          show: false
        },
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: "#555555"
          }
        }
      };

      if (this._data) {
        results.data = this._data;
      }

      return results;
    }
  }]);

  return DataChartXAxis;
}();
/**
 * Y-axis options for a chart to be added to a {@link DataChartOptions} object
 * @memberof Autodesk.DataVisualization.UI.DataChart
 * @alias Autodesk.DataVisualization.UI.DataChart.DataChartYAxis
 */

var DataChartYAxis = /*#__PURE__*/function () {
  function DataChartYAxis() {
    _classCallCheck(this, DataChartYAxis);
  }
  /**
   * Minimum in data range on the Y-axis
   * @type {number}
   *
   * @param {number} value The minimum in data range on Y-axis
   */


  _createClass(DataChartYAxis, [{
    key: "dataMin",
    set: function set(value) {
      this._dataMin = value;
    }
    /**
     * Maximum in data range on the Y-axis
     * @type {number}
     *
     * @param {number} value The maximum in data range on Y-axis
     */

  }, {
    key: "dataMax",
    set: function set(value) {
      this._dataMax = value;
    }
    /**
     *
     * Callback function invoked when the chart requires a label string.
     * @type {IndexedFormatterFunc}
     *
     * @param {IndexedFormatterFunc} callback The callback function
     * invoked when the chart requires a label string.
     * @memberof Autodesk.DataVisualization.UI.DataChart.DataChartYAxis
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartYAxis#labelFormatter
     */

  }, {
    key: "labelFormatter",
    set: function set(callback) {
      this._labelFormatter = callback;
    }
    /**
     * Callback function invoked when the chart requires a pointer label string.
     * @type {PointerLabelFormatter}
     *
     * @param {PointerLabelFormatter} callback The callback function
     * &nbsp;invoked when the chart requires a pointer label string.
     * @memberof Autodesk.DataVisualization.UI.DataChart.DataChartYAxis
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartYAxis#pointerFormatter
     */

  }, {
    key: "pointerFormatter",
    set: function set(callback) {
      this._pointerFormatter = callback;
    }
    /**
     * Generates the options object representing the Echarts configurations.
     *
     * @memberof Autodesk.DataVisualization.UI.DataChart.DataChartYAxis
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartYAxis#generateOptions
     */

  }, {
    key: "generateOptions",
    value: function generateOptions() {
      return {
        axisLabel: {
          color: "#979797",
          formatter: this._labelFormatter
        },
        axisPointer: {
          label: {
            formatter: this._pointerFormatter
          }
        },
        splitNumber: 3,
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "#555555"
          }
        },
        min: this._dataMin || "dataMin",
        max: this._dataMax || "dataMax"
      };
    }
  }]);

  return DataChartYAxis;
}();
/**
 * Tooltip options for the data chart to be used with {@link DataChartOptions}
 *
 * @memberof Autodesk.DataVisualization.UI.DataChart
 * @alias Autodesk.DataVisualization.UI.DataChart.DataChartToolTip
 */

var DataChartToolTip = /*#__PURE__*/function () {
  function DataChartToolTip() {
    _classCallCheck(this, DataChartToolTip);
  }

  _createClass(DataChartToolTip, [{
    key: "trigger",
    set:
    /**
     * @param {"item"|"axis"|"none"} value The type of tool-tip trigger.
     */
    function set(value) {
      this._trigger = value;
    }
    /**
     * Callback function invoked when the chart requires a tool-tip string.
     * @type {Function}
     *
     * @param {Function} callback The callback function
     * invoked when the chart requires a tool-tip string.
     * @memberof Autodesk.DataVisualization.UI.DataChart
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartToolTip#formatter
     */

  }, {
    key: "formatter",
    set: function set(callback) {
      this._formatter = callback;
    }
    /**
     * Generates the options object representing the Echarts configurations.
     *
     * @memberof Autodesk.DataVisualization.UI.DataChart
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartToolTip#generateOptions
     */

  }, {
    key: "generateOptions",
    value: function generateOptions() {
      return {
        trigger: this._trigger,
        axisPointer: {
          type: "cross",
          animation: false,
          label: {
            backgroundColor: "#ccc",
            borderColor: "#aaa",
            borderWidth: 1,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            color: "#222"
          }
        },
        formatter: this._formatter
      };
    }
  }]);

  return DataChartToolTip;
}();
/**
 * Options for rendering a chart
 * @memberof Autodesk.DataVisualization.UI.DataChart
 * @alias Autodesk.DataVisualization.UI.DataChart.DataChartOptions
 */

var DataChartOptions = /*#__PURE__*/function () {
  /**
   * Constructs an instance of DataChartOptions object.
   *
   * @param {string} title The main title of the chart
   * @param {string} subtitle The sub-title of the chart
   * @param {"left"|"center"|"right"} alignment The alignment of the title
   */
  function DataChartOptions(title, subtitle, alignment) {
    _classCallCheck(this, DataChartOptions);

    this._title = title;
    this._subtitle = subtitle;
    this._alignment = alignment;
  }
  /**
   * @param {DataChartXAxis} value The definition of X-axis for the chart.
   */


  _createClass(DataChartOptions, [{
    key: "xAxis",
    set: function set(value) {
      this._xAxis = value;
    }
    /**
     * @param {DataChartYAxis} value The definition of Y-axis for the chart.
     */

  }, {
    key: "yAxis",
    set: function set(value) {
      this._yAxis = value;
    }
    /**
     * @param {DataChartToolTip} value The definition of chart tool-tip.
     */

  }, {
    key: "toolTip",
    set: function set(value) {
      this._toolTip = value;
    }
    /**
     * Adds a new series to the data chart.
     *
     * @param {DataChartSeriesBase} series The series to be added to the
     * &nbsp;chart. This can be any of the derived classes of DataChartSeriesBase.
     * @memberof Autodesk.DataVisualization.UI.DataChart
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartOptions#addSeries
     */

  }, {
    key: "addSeries",
    value: function addSeries(series) {
      this._series = this._series || [];

      this._series.push(series);
    }
    /**
     * Generates the options object for E-Chart's consumption.
     * @memberof Autodesk.DataVisualization.UI.DataChart
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartOptions#generateOptions
     */

  }, {
    key: "generateOptions",
    value: function generateOptions() {
      var options = {
        title: {
          text: this._title,
          subtext: this._subtitle,
          left: this._alignment,
          subtextStyle: {
            color: "#fff",
            fontSize: 16,
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontWeight: 500
          },
          textStyle: {
            color: "#d0d0d0",
            fontSize: 12,
            fontFamily: "Roboto, Helvetica, Arial, sans-serif"
          }
        },
        tooltip: this._toolTip ? this._toolTip.generateOptions() : undefined,
        grid: {
          left: "2%",
          right: "2%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: this._xAxis.generateOptions(),
        yAxis: this._yAxis.generateOptions(),
        series: []
      };

      if (this._series) {
        options.series = this._series.map(function (s) {
          return s.generateOptions();
        });
      }

      return options;
    }
    /**
     * Generates the options objects for charts displayed inside a tooltip.
     * @memberof Autodesk.DataVisualization.UI.DataChart
     * @alias Autodesk.DataVisualization.UI.DataChart.DataChartOptions#generateToolTipOptions
     */

  }, {
    key: "generateToolTipOptions",
    value: function generateToolTipOptions() {
      var options = this.generateOptions();
      options.grid = {};
      options.grid.top = "5%";
      options.grid.bottom = "65%";
      options.xAxis.show = false;
      options.yAxis.show = false;
      options.title.subtextStyle.fontSize = 10;
      return options;
    }
  }]);

  return DataChartOptions;
}();

//
/**
 * A chart that displays values of a single property for a single device.
 * @component
 *
 * @param {Object} props
 * @param {string} props.key Unique string identifier.
 * @param {string} props.deviceId The device Id used for this specific chart.
 * @param {string} props.deviceProperty String identifier for property displayed in chart.
 * @param {ChartDataProperty} props.chartData Data used to generate charts for (props.deviceId, props.deviceProperty)
 * @param {boolean} props.tooltip An optional flag when true indicates embeds the chart in a
 * &nbsp;{@link CustomToolTip} object.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.DataChart
 */

function DataChart(props) {
  var _props$chartData = props.chartData,
      dataUnit = _props$chartData.dataUnit,
      seriesData = _props$chartData.seriesData,
      yAxis = _props$chartData.yAxis;
  /**
   * Used as the pointer formatter for a {@link DataChartXAxis#pointerFormatter}
   *
   * @param {Object} params
   * @param {number} params.value An integer timestamp value that represents the number of milliseconds since January 1, 1970
   * @returns {string} Formatted pointer value
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DataChart#xAxisPointerFormatter
   */

  function xAxisPointerFormatter(params) {
    var date = new Date(params.value);
    var options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    return "".concat(date.toLocaleDateString(undefined, options));
  }
  /**
   * Used as the label formatter for a {@link DataChartYAxis#labelFormatter} in {@link DataChart#createBasicChartOptions}
   *
   * @param {number} value chart value of the property
   * @param {number} index index of the axis label
   * @returns {string} Formatted label value
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DataChart#yAxisLabelFormatter
   */


  function yAxisLabelFormatter(value, index) {
    return value ? value.toFixed(2) : "0.00";
  }
  /**
   * Used as the pointer formatter for a {@link DataChartYAxis#pointerFormatter} in {@link DataChart#createBasicChartOptions}
   *
   * @param {Object} params
   * @param {number} params.value chart value of the property
   * @returns {string} Formatted pointer value
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DataChart#yAxisPointerFormatter
   */


  function yAxisPointerFormatter(params) {
    var v = params.value ? params.value.toFixed(2) : "0.00";
    return "".concat(v, " ").concat(dataUnit);
  }
  /**
   * Used as a tooltip formatter for a {@link DataChartToolTip#formatter} in {@link DataChart#createBasicChartOptions}
   *
   * @param {Object} params
   * @param {number} params.value chart value of the property
   * @returns {string} Formatted tool tip value
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DataChart#toolTipFormatter
   */


  function toolTipFormatter(params) {
    var v = params.value ? params.value.toFixed(2) : "0.00";
    return "".concat(v, " ").concat(dataUnit);
  }
  /**
   * Creates basic chart options for the given Device.
   *
   * @returns {DataChartOptions} A configured {@link DataChartOptions} object.
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DataChart#createBasicChartOptions
   */


  function createBasicChartOptions() {
    var caption = "".concat(props.deviceProperty, " (").concat(dataUnit, ")");
    var dco = new DataChartOptions("", caption, "center");
    var dataChartyAxis = new DataChartYAxis();
    dataChartyAxis.labelFormatter = yAxisLabelFormatter;
    dataChartyAxis.pointerFormatter = yAxisPointerFormatter;
    var min = yAxis.min,
        max = yAxis.max;
    dataChartyAxis.dataMin = min;
    dataChartyAxis.dataMax = max;
    dco.yAxis = dataChartyAxis;
    var toolTip = new DataChartToolTip();
    toolTip.formatter = toolTipFormatter;
    dco.toolTip = toolTip;
    return dco;
  }
  /**
   * Gets the chart line color associated with the specified property
   *
   * @param {string} propertyId The id of the property
   * @returns {string} Color to use for the specified property. #ffffff if propertyId isn't found.
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DataChart#getColorForProperty
   */


  function getColorForProperty(propertyId) {
    var colors = {
      Temperature: "#ff8c8c",
      Humidity: "#94deff",
      "CO₂": "#cff98c"
    };
    return colors[propertyId] || "#ffffff";
  }
  /**
   * Creates a new {@link DataChartSeriesLine} with the specified values and color
   *
   * @param {ChartSeriesData} values Data values to be used for the chart line.
   * @param {string} colorValue Color value obtained from getColorForProperty method
   * @returns {DataChartSeriesLine} Series line with the specified values and color
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DataChart#createSeriesForValues
   */


  function createSeriesForValues(values, colorValue) {
    var mainSeries = new DataChartSeriesLine(values);
    mainSeries.hoverAnimation = false;
    mainSeries.symbolSize = 6;
    mainSeries.itemStyle = {
      color: colorValue
    };
    return mainSeries;
  }

  var showLoading = true;
  var chartOptions = {
    text: "Sensor name",
    subtext: "Sensor GUID",
    left: "center"
  };
  var dco = createBasicChartOptions(); // xAxis will be created just once. Note that the data for x-axis
  // is not specified here. Instead, it is encoded in 'seriesData'
  // below as the first element of 'value' array (with the second
  // element as the actual sensor value). A label formatter is not
  // used here because it is left to the chart to format the text
  // based on the date range (to include 'time-of-day' or not.)
  //

  var xAxis = new DataChartXAxis(undefined, "time");
  xAxis.pointerFormatter = xAxisPointerFormatter;
  dco.xAxis = xAxis;
  var color = getColorForProperty(props.deviceProperty);
  var series = createSeriesForValues(seriesData, color);
  dco.addSeries(series);

  if (props.tooltip) {
    // If chart will be generated inside a tooltip.
    chartOptions = dco.generateToolTipOptions();
  } else {
    chartOptions = dco.generateOptions();
  }

  showLoading = false; // Data available, mark loading as false.

  return /*#__PURE__*/React.createElement("div", {
    className: "chart-container"
  }, /*#__PURE__*/React.createElement(ReactEchartsCore, {
    echarts: echarts,
    option: chartOptions,
    className: props.tooltip ? "tooltip-size" : "dashboard-size",
    showLoading: showLoading
  }));
}

//

/**
 * A custom tool-tip that is displayed over Forge Viewer canvas when a user hovers over a device. Contains a {@link DataChart} for each property along with the estimated current property value.
 * @component
 *
 * @param {Object} props
 * @param {HoveredDeviceInfo} props.hoveredDeviceInfo Object containing the id and (x,y) canvas coordinates of the
 * &nbsp;device being hovered over.
 * @param {ChartData} props.chartData Data used to generate charts for each property associated with props.hoveredDeviceInfo
 * @param {CurrentDeviceData} props.currentDeviceData Data containing the estimated propertyValue for each property
 * &nbsp;associated with props.hoveredDeviceInfo
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.CustomToolTip
 */

function CustomToolTip(props) {
  if (props.hoveredDeviceInfo.id) {
    var chartData = props.chartData[props.hoveredDeviceInfo.id];
    var deviceName = chartData ? chartData.name : /*#__PURE__*/React.createElement(CircularProgress, {
      className: "tooltip-loading-icon",
      color: "secondary",
      size: 30
    });
    var properties = chartData ? Object.keys(chartData["properties"]) : [];
    var currentDeviceData = props.currentDeviceData[props.hoveredDeviceInfo.id];
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "tooltip-device-name"
      }, deviceName), properties.map(function (property) {
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: "".concat(props.hoveredDeviceInfo.id, "-").concat(property)
        }, /*#__PURE__*/React.createElement("span", {
          className: "tooltip-property-val"
        }, currentDeviceData ? currentDeviceData[property] : ""), /*#__PURE__*/React.createElement(DataChart, {
          key: "".concat(props.hoveredDeviceInfo.id, "-").concat(property),
          deviceId: props.hoveredDeviceInfo.id,
          deviceProperty: property,
          chartData: chartData["properties"][property],
          tooltip: true
        }));
      })),
      arrow: true,
      placement: "top",
      open: Boolean(props.hoveredDeviceInfo.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "tooltip",
      style: {
        left: "".concat(props.hoveredDeviceInfo.xcoord, "px"),
        top: "".concat(props.hoveredDeviceInfo.ycoord - 2, "px")
      }
    }));
  }

  return null;
}

//
/**
 * A basic tree structure component.
 * @component
 *
 * @param {Object} props
 * @param {string} props.expanded String identifier of node to be expanded
 * @param {string} props.selectedNodeId ID of the currently selected node
 * @param {OnLabelRequest} props.onLabelRequest Function to generate a label given a {@link TreeNode}
 * @param {Array.<TreeNode>} props.data Represents an array of hierarchical {@link TreeNode} to be rendered.
 * @param {OnMouseEvent} props.onIconClick Function to be invoked when the arrow icon is clicked
 * @param {OnMouseEvent} props.onLabelClick Function to be invoked when a label is clicked
 * @param {OnMouseEvent} props.onMouseOver Function to be invoked on the mouseover of a {@link TreeNode}
 * @param {OnMouseEvent} props.onMouseOut Function to be invoked when the mouse hovers off a {@link TreeNode}.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.BasicTree
 */

function BasicTree(props) {
  /**
   * Calls the corresponding handler with data if found.
   *
   * @param {string} handlerName Name of event handler.
   * @param {TreeNode} data Node that triggered event.
   * @private
   */
  function onEvent(handlerName, data) {
    return function (event) {
      if (props[handlerName]) {
        props[handlerName](event, data);
      }
    };
  }
  /**
   *
   * @param {Object} node Represents a node in props.data
   * @returns {String[]} Returns the children if found for the given node. Returns [] otherwise.
   * @private
   */


  function getChildNodes(node) {
    if (Array.isArray(node.children)) {
      return node.children;
    }

    return [];
  }
  /**
   * Finds a path from the root of the tree to the target {@link TreeNode}.
   *
   * @param {TreeNode[]} tree Tree of device {@link TreeNode} in the scene.
   * @param {string} goal Id of {@link TreeNode}
   * @returns {string[]} An array of node identifiers representing the path from root to goal. Returns [] if a path to the
   * &nbsp;{@link TreeNode} cannot be found.
   * @private
   */


  function getPath(tree, goal) {
    function helper(tree, goal) {
      if (tree.id == goal) return [tree.id];

      for (var i = 0; i < tree.children.length; i++) {
        var subpath = helper(tree.children[i], goal);

        if (subpath) {
          return [tree.id].concat(subpath);
        }
      }
    }

    for (var index = 0; index < tree.length; index++) {
      var path = helper(tree[index], goal);
      if (path) return path;
    }

    return [];
  }
  /**
   * Renders a row for the given node and its children, if any.
   *
   * @param {TreeNode} node Represents a node in props.data
   * @private
   */


  var renderTree = function renderTree(node) {
    if (node.children.length > 0) {
      return /*#__PURE__*/React.createElement(TreeItem, {
        id: "tree-node-".concat(node.id),
        key: node.id,
        nodeId: node.id.toString(),
        onMouseOver: onEvent("onMouseOver", node),
        onMouseOut: onEvent("onMouseOut", node),
        onLabelClick: onEvent("onLabelClick", node),
        onIconClick: onEvent("onIconClick", node),
        label: props.onLabelRequest(node)
      }, getChildNodes(node).map(function (child) {
        return renderTree(child);
      }));
    } else {
      return /*#__PURE__*/React.createElement(TreeItem, {
        id: "leaf-node-".concat(node.id),
        key: node.id,
        nodeId: node.id.toString(),
        onMouseOver: onEvent("onMouseOver", node),
        onMouseOut: onEvent("onMouseOut", node),
        onLabelClick: onEvent("onLabelClick", node),
        onIconClick: onEvent("onIconClick", node),
        label: props.onLabelRequest(node)
      });
    }
  };

  return /*#__PURE__*/React.createElement(TreeView, {
    defaultCollapseIcon: /*#__PURE__*/React.createElement(ArrowDropDownIcon, null),
    defaultExpandIcon: /*#__PURE__*/React.createElement(ArrowRightIcon, null),
    expanded: getPath(props.data, props.expanded),
    selected: props.selectedNodeId
  }, props.data.map(function (device) {
    return renderTree(device);
  }));
}

//
/**
 * Displays the property value and corresponding property icon for a given device and property..
 * @component
 *
 * @param {Object} props
 * @param {string} props.deviceId String identifier of the device
 * @param {string} props.propertyValue String representation of the numerical value of the property and the corresponding data unit.
 * @param {string} props.propertyIcon Image src used to visually represent a property.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.DeviceStats
 */

function DeviceStats(props) {
  return /*#__PURE__*/React.createElement(Chip, {
    variant: "outlined",
    label: props.propertyValue,
    icon: /*#__PURE__*/React.createElement("img", {
      src: props.propertyIcon,
      alt: "property-icon",
      className: "chip-icon"
    })
  });
}

var EventTypes = {
  MODEL_LOAD_COMPLETED: "MODEL_LOAD_COMPLETED",
  RENDER_SETTINGS_CHANGED: "RENDER_SETTINGS_CHANGED",
  GROUP_SELECTION_MOUSE_OVER: "GROUP_SELECTION_MOUSE_OVER",
  GROUP_SELECTION_MOUSE_OUT: "GROUP_SELECTION_MOUSE_OUT",
  GROUP_SELECTION_MOUSE_CLICK: "GROUP_SELECTION_MOUSE_CLICK",
  DEVICE_TREE_EXPAND_EVENT: "DT_NODE_EXPAND_EVENT",
  VIEWABLES_LOADED: "VIEWABLES_LOADED"
};

//

var MemoizedDeviceStats = /*#__PURE__*/memo(DeviceStats);
/**
 * A tree component used to display a list of devices.
 * @component
 *
 * @param {Object} props
 * @param {EventBus} props.eventBus Used to dispatch mouse events when a user interacts with a {@link TreeNode}
 * @param {TreeNode[]} props.devices Array of device {@link TreeNode} in the scene
 * @param {OnNodeSelected} props.onNodeSelected A callback function invoked
 * &nbsp;when a device {@link TreeNode} is selected
 * @param {(SurfaceShadingGroup|SurfaceShadingNode)} props.selectedGroupNode Represents the
 * &nbsp;group node that is currently selected in the scene.
 * @param {CurrentDeviceData} props.currentDeviceData Data containing the estimated propertyValue for each property
 * &nbsp;associated with the selected device.
 * @param {Object} props.propertyIconMap A mapping of property names to image paths used for each {@link DeviceStats} object.
 * @param {Function} props.onNavigateBack A callback function invoked when "Back to devices" button is clicked.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.DeviceTree
 */

function DeviceTree(props) {
  var eventBus = props.eventBus;
  /**
   * Dispatches the event if an eventBus is found.
   *
   * @param {MouseEvent} event MouseEvent that needs to be dispatched.
   * @private
   */

  function dispatchEvent(event) {
    if (eventBus) {
      eventBus.dispatchEvent(event);
    } else {
      console.warn("Please add an eventBus to dispatch events");
    }
  }
  /**
   *
   * @param {TreeNode} node {@link TreeNode}
   * @returns {number} The total number of descendants that a struct has.
   * @private
   */


  function getNumDescendants(node) {
    if (node.children.length === 0) {
      return 1;
    } else {
      var count = 0;
      node.children.forEach(function (child) {
        count += getNumDescendants(child);
      });
      return count;
    }
  }
  /**
   * Called when a user selects the arrow icon in the device tree to expand or close a group of devices.
   *
   * @param {MouseEvent} event Event indicating a user has expanded or closed a row in the {@link DeviceTree}.
   * @param {TreeNode} node Node corresponding to the grouping of devices expanded/closed by the user.
   * @private
   */


  function onIconClick(event, node) {
    dispatchEvent({
      type: EventTypes.DEVICE_TREE_EXPAND_EVENT,
      originalEvent: event,
      data: node
    });
  }
  /**
   * Called when a user selects a row in the {@link DeviceTree}.
   *
   * @param {MouseEvent} event Click event indicating a user has selected a row in the {@link DeviceTree}.
   * @param {TreeNode} node Node corresponding to the row selected by the user.
   * @private
   */


  function onLabelClick(event, node) {
    props.onNodeSelected(event, node.id);
  }
  /**
   * Creates a label to be displayed for the given node. If node refers to a grouping of devices, the <React.Fragment>
   * &nbsp;contains the group name and the number of devices in the group. If node refers to an
   * &nbsp;individual device, the <React.Fragment> contains the device name and a {@link DeviceStats}
   * &nbsp;for each device property.
   *
   * @param {TreeNode} node Represents a device.
   * @returns a <React.Fragment> that represents a row in the {@link DeviceTree}.
   * @private
   */


  function createLabel(node) {
    var data = props.currentDeviceData[node.id];
    var properties = data ? Object.keys(data) : [];
    var propertyIconMap = props.propertyIconMap || {};

    if (node.children.length > 0) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
        component: "div",
        noWrap: true
      }, node.name), /*#__PURE__*/React.createElement("div", {
        className: "badge"
      }, getNumDescendants(node)));
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "tree-device-row-heading"
      }, /*#__PURE__*/React.createElement(Typography, {
        className: "tree-device-name",
        noWrap: true,
        variant: "inherit",
        component: "p"
      }, node.name)), properties.map(function (property) {
        return /*#__PURE__*/React.createElement(MemoizedDeviceStats, {
          key: "".concat(node.id, "-").concat(property),
          deviceId: node.id,
          propertyIcon: propertyIconMap[property],
          propertyValue: data[property]
        });
      }));
    }
  }

  return /*#__PURE__*/React.createElement(BasicTree, {
    expanded: props.selectedGroupNode ? props.selectedGroupNode.id : "",
    onLabelRequest: createLabel,
    data: props.devices,
    onIconClick: onIconClick,
    onLabelClick: onLabelClick,
    onMouseOver: onLabelClick,
    onMouseOut: props.onNavigateBack
  });
}

/**
 * A panel component that displays all of devices in the scene.
 * @component
 * @param {Object} props
 * @param {EventBus} props.eventBus Used to dispatch mouse events when a user interacts with a {@link TreeNode}
 * @param {TreeNode[]} props.devices Array of device {@link TreeNode} in the scene
 * @param {OnNodeSelected} props.onNodeSelected A callback function invoked
 * &nbsp;when a device {@link TreeNode} is selected
 * @param {Object} props.propertyIconMap A mapping of property names to image paths used for each {@link DeviceStats} in the {@link DeviceTree} .
 * @param {(SurfaceShadingGroup|SurfaceShadingNode)} props.selectedGroupNode Represents the
 * &nbsp;group node that is currently selected in the scene.
 * @param {CurrentDeviceData} props.currentDeviceData Data containing the estimated propertyValue for each property
 * @param {Function} props.onNavigateBack A callback function invoked when "Back to devices" button is clicked.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.DevicePanel
 */

function DevicePanel(props) {
  /**
   * Generates the labels used for searching for each device that data has been fetched for.
   *
   * @returns {Object[]} A list of device label records that is used by the AutoComplete component to show and identify a device.
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DevicePanel#getDeviceLabels
   * @private
   */
  function getDeviceLabels() {
    var deviceLabels = [];

    var _iterator = _createForOfIteratorHelper(props.devices),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var group = _step.value;

        var _iterator2 = _createForOfIteratorHelper(group.children),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var device = _step2.value;

            if (props.currentDeviceData[device.id]) {
              deviceLabels.push({
                id: device.id,
                name: device.name
              });
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return deviceLabels;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "title"
  }, "Sensor List"), /*#__PURE__*/React.createElement("div", {
    id: "searchBarDiv"
  }, /*#__PURE__*/React.createElement(Autocomplete, {
    autoComplete: true,
    disableClearable: true,
    forcePopupIcon: false,
    clearOnEscape: true,
    options: getDeviceLabels(),
    getOptionLabel: function getOptionLabel(option) {
      return option.name;
    },
    getOptionSelected: function getOptionSelected(option, value) {
      return option.id === value.id;
    },
    onChange: function onChange(event, newValue) {
      if (newValue) props.onNodeSelected(event, newValue.id);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, _extends({}, params, {
        placeholder: "Search",
        variant: "outlined",
        fullWidth: true,
        InputProps: _objectSpread2(_objectSpread2({}, params.InputProps), {}, {
          endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
            position: "end"
          }, /*#__PURE__*/React.createElement(SearchIcon, null)),
          autoComplete: "on"
        }),
        size: "small"
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    id: "device-tree-view"
  }, /*#__PURE__*/React.createElement(DeviceTree, {
    devices: props.devices,
    onNodeSelected: props.onNodeSelected,
    propertyIconMap: props.propertyIconMap,
    currentDeviceData: props.currentDeviceData,
    selectedGroupNode: props.selectedGroupNode,
    eventBus: props.eventBus,
    onNavigateBack: props.onNavigateBack
  })));
}

//

/**
 * A dashboard component that hosts one or more charts for the selected device
 * @component
 *
 * @param {Object} props
 * @param {string} props.selectedDeviceId The selected device Id used for charting.
 * @param {Function} props.onNavigateBack Callback invoked when the "Back
 * &nbsp;to devices" button is clicked.
 * @param {ChartData} props.chartData Data used to generate charts for each property
 * &nbsp;associated with props.selectedDeviceId
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.Dashboard
 */

function Dashboard(props) {
  function onBackButtonClicked() {
    if (props.onNavigateBack) {
      props.onNavigateBack();
    }
  }
  /**
   * Creates a {@link DataChart} for each property associated with props.selectedDeviceId.
   *
   * @returns {JSX.Element[]} An array of {@link DataChart} objects.
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.Dashboard#generateChartElements
   */


  function generateChartElements() {
    // Get all the properties for this given device.
    var data = props.chartData[props.selectedDeviceId];
    var properties = data ? Object.keys(data["properties"]) : [];
    var chartElements = properties.map(function (property) {
      return /*#__PURE__*/React.createElement(DataChart, {
        key: "".concat(props.selectedDeviceId, "-").concat(property),
        deviceId: props.selectedDeviceId,
        deviceProperty: property,
        chartData: data["properties"][property]
      });
    });
    return chartElements.length ? chartElements : /*#__PURE__*/React.createElement(CircularProgress, {
      id: "dashboard-loading-icon",
      size: 50,
      color: "secondary"
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dashboard-header"
  }, /*#__PURE__*/React.createElement(IconButton, {
    id: "dashboard-back-arrow",
    onClick: onBackButtonClicked,
    "aria-label": "navigate back to devices"
  }, /*#__PURE__*/React.createElement(ArrowBackIosIcon, null)), /*#__PURE__*/React.createElement(Typography, {
    className: "dashboard-device-name",
    align: "center",
    noWrap: true,
    variant: "inherit",
    component: "p"
  }, props.chartData[props.selectedDeviceId] ? props.chartData[props.selectedDeviceId].name : "")), generateChartElements());
}

//
// eslint-disable-next-line no-unused-vars

/**
 * The side panel component that displays the list of all sensors, or the charts for a single selected device
 * @component
 *
 * @param {Object} props
 * @param {EventBus} props.eventBus Used to dispatch mouse events when a user interacts with a {@link TreeNode}
 * @param {string} props.selectedDevice An optional value that represents the
 * &nbsp;identifier of the current selected device. Empty string if no
 * &nbsp;device is selected.
 * @param {Function} props.onNavigateBack A callback function invoked when "Back
 * &nbsp;to devices" button is clicked.
 * @param {TreeNode[]} props.devices Array of device {@link TreeNode} in the scene
 * @param {OnNodeSelected} props.onNodeSelected A callback function that is invoked
 * &nbsp;when a tree node is selected
 * @param {Map<Number,String>} props.deviceId2DbIdMap A mapping of device identifiers
 * &nbsp;to the dbId corresponding to its visual representation in the viewer.
 * @param {Object} props.dataVizExtn Represents the Forge Viewer Data Visualization extension
 * @param {ChartData} props.chartData Data used to generate charts for each property associated with props.selectedDevice
 * @param {CurrentDeviceData} props.currentDeviceData Data containing the estimated propertyValue for each property
 * &nbsp;associated with props.selectedDevice
 * @param {Object} props.propertyIconMap  A mapping of property names to image paths used for
 * &nbsp;each {@link DeviceStats} object.
 * @param {(SurfaceShadingGroup|SurfaceShadingNode)} props.selectedGroupNode Represents the
 * &nbsp;group node that is currently selected in the scene.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.DataPanelContainer
 */

function DataPanelContainer(props) {
  /**
   * @returns {HTMLDivElement} Containing a vertical ellipsis representing a movable handle.
   * @private
   */
  var CustomHandle = function CustomHandle() {
    return /*#__PURE__*/React.createElement("div", {
      id: "resizeHandle"
    }, "\u22EE");
  };
  /**
   * Generates contents for display on the side of viewer. If a device has been selected, the
   * {@link Dashboard} is rendered. Otherwise, {@link DevicePanel} is rendered.
   *
   * @returns {JSX.Element} The contents to be rendered in place of the panel.
   * @memberof Autodesk.DataVisualization.UI
   * @alias Autodesk.DataVisualization.UI.DataPanelContainer#generatePanelContents
   * @private
   */


  function generatePanelContents() {
    if (props.selectedDevice) {
      return /*#__PURE__*/React.createElement(Dashboard, {
        selectedDeviceId: props.selectedDevice,
        onNavigateBack: props.onNavigateBack,
        chartData: props.chartData
      });
    } else {
      return /*#__PURE__*/React.createElement(DevicePanel, {
        devices: props.devices,
        onNodeSelected: props.onNodeSelected,
        onNavigateBack: props.onNavigateBack,
        propertyIconMap: props.propertyIconMap,
        currentDeviceData: props.currentDeviceData,
        selectedGroupNode: props.selectedGroupNode,
        eventBus: props.eventBus
      });
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, props.deviceId2DbIdMap && props.dataVizExtn && /*#__PURE__*/React.createElement(Rnd, {
    id: "data-panel-container",
    className: props.selectedDevice ? "dashboard-view" : "device-panel-view",
    default: {
      width: "inherit",
      height: "inherit"
    },
    disableDragging: true,
    resizeHandleComponent: {
      left: /*#__PURE__*/React.createElement(CustomHandle, null)
    },
    bounds: "parent",
    enableResizing: {
      top: false,
      right: false,
      bottom: false,
      left: true,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false
    }
  }, generatePanelContents()));
}

/**
 * @returns {React.ReactFragment} The SvgIcon used to for the deviceButton.
 * @private
 */

function SensorOptionIcon() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SvgIcon, {
    viewBox: "0 0 30 26",
    xmlns: "http://www.w3.org/2000/svg",
    id: "sensor-option-icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.04656,10.793a2.15724,2.15724 0 1,0 4.31448,0a2.15724,2.15724 0 1,0 -4.31448,0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27.6947 10.7923C27.6947 7.60096 26.4978 4.68913 24.5285 2.4812C24.1858 2.09699 24.1427 1.52037 24.4598 1.11484V1.11484C24.8251 0.647805 25.5153 0.593926 25.9148 1.03206C28.2629 3.60738 29.6947 7.03264 29.6947 10.7923C29.6947 14.46 28.332 17.8095 26.0854 20.3621C25.6816 20.821 24.966 20.7611 24.6022 20.2698V20.2698C24.3057 19.8692 24.3489 19.315 24.6741 18.9373C26.5567 16.7504 27.6947 13.9043 27.6947 10.7923ZM5.80514 20.2696C6.1017 19.869 6.05843 19.3148 5.73328 18.9371C3.85083 16.7502 2.71289 13.9042 2.71289 10.7923C2.71289 7.60104 3.90966 4.68928 5.87889 2.48137C6.22156 2.09716 6.26472 1.52054 5.94755 1.11502V1.11502C5.58228 0.647977 4.89205 0.594103 4.49258 1.03225C2.14461 3.60755 0.71289 7.03274 0.71289 10.7923C0.71289 14.4599 2.07543 17.8093 4.32192 20.3619C4.72579 20.8208 5.4414 20.7609 5.80514 20.2696V20.2696ZM8.10802 17.159C7.72911 17.6708 6.97619 17.7156 6.59537 17.2052C5.26038 15.416 4.47007 13.1965 4.47007 10.7925C4.47007 8.25108 5.35328 5.91596 6.82951 4.07733C7.21145 3.60163 7.92694 3.64583 8.30277 4.12636V4.12636C8.61122 4.52074 8.58036 5.07752 8.27522 5.47448C7.14313 6.94727 6.47007 8.79128 6.47007 10.7925C6.47007 12.6816 7.06983 14.4306 8.08933 15.8595C8.36688 16.2485 8.39236 16.7749 8.10802 17.159V17.159ZM22.2995 17.1594C22.6784 17.6712 23.4313 17.716 23.8121 17.2057C25.1474 15.4164 25.9378 13.1967 25.9378 10.7925C25.9378 8.25088 25.0545 5.91558 23.578 4.07688C23.1961 3.60122 22.4806 3.64543 22.1048 4.12595V4.12595C21.7963 4.52035 21.8272 5.07716 22.1324 5.47411C23.2647 6.94696 23.9378 8.79111 23.9378 10.7925C23.9378 12.6818 23.3379 14.431 22.3183 15.8599C22.0407 16.249 22.0152 16.7754 22.2995 17.1594V17.1594ZM19.7259 13.6831C20.1508 14.2571 21.0111 14.256 21.3105 13.6076C21.706 12.7512 21.9266 11.7976 21.9266 10.7924C21.9266 9.58011 21.6057 8.44278 21.0443 7.46069C20.717 6.8882 19.9313 6.90502 19.525 7.42446V7.42446C19.2392 7.78985 19.24 8.2953 19.4447 8.7116C19.7533 9.33936 19.9266 10.0456 19.9266 10.7924C19.9266 11.393 19.8145 11.9675 19.61 12.496C19.4574 12.8904 19.4742 13.3432 19.7259 13.6831V13.6831ZM10.6816 13.6827C10.9333 13.3428 10.9501 12.8901 10.7976 12.4956C10.5932 11.9672 10.4811 11.3929 10.4811 10.7924C10.4811 10.0457 10.6544 9.33957 10.9629 8.71188C11.1675 8.29559 11.1683 7.79017 10.8825 7.42479V7.42479C10.4762 6.90534 9.69046 6.88854 9.3632 7.46108C8.80189 8.44308 8.4811 9.58027 8.4811 10.7924C8.4811 11.7974 8.70163 12.7509 9.09693 13.6071C9.3963 14.2555 10.2567 14.2567 10.6816 13.6827V13.6827ZM14.7543 25.2764C14.9035 25.2809 15.0534 25.2832 15.2038 25.2832C15.3542 25.2832 15.504 25.2809 15.6533 25.2764L14.7543 25.2764Z"
  })));
}
/**
 * Component responsible for displaying the grouping information as defined by
 * the parent component and a menu to configure device render settings.
 *
 * @component
 *
 * @param {Object} props
 * @param {TreeNode[]} props.data Array of device {@link TreeNode} in the scene
 * @param {EventBus} props.eventBus Used to dispatch mouse events when a user interacts with a {@link TreeNode}
 * @param {boolean} [props.structureToolOnly] Flag that renders only the BasicTree option when true.
 * @param {(SurfaceShadingGroup|SurfaceShadingNode)} props.selectedGroupNode Represents the
 * &nbsp;group node that is currently selected in the scene.
 * @param {{Object}} props.renderSettings Defines settings that are configured via the DataViz extension.
 * @param {boolean} props.renderSettings.showViewables Defines whether sprite viewables are visible in the scene.
 * @param {boolean} props.renderSettings.occlusion Defines whether the sprite viewables are occluded.
 * @param {boolean} props.renderSettings.showTextures Defines whether textures are shown.
 * @param {"GeometryHeatmap"|"PlanarHeatmap"} props.renderSettings.heatmapType Heatmap type to render in scene.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.HyperionToolContainer
 */


function HyperionToolContainer(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      ssdButtonAnchor = _useState2[0],
      setSSDButtonAnchor = _useState2[1]; //SSD = SurfaceShadingData


  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      deviceButtonAnchor = _useState4[0],
      setDeviceButtonAnchor = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      expandNodeId = _useState6[0],
      setExpandNodeId = _useState6[1];

  var _useState7 = useState(""),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedNodeId = _useState8[0],
      setSelectedNodeId = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showSSD = _useState10[0],
      setShowSSD = _useState10[1]; // SSD = SurfaceShadingData


  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      fromDeviceTree = _useState12[0],
      setFromDeviceTree = _useState12[1];

  var _useState13 = useState(true),
      _useState14 = _slicedToArray(_useState13, 2),
      canClose = _useState14[0],
      setCanClose = _useState14[1];

  var settings = props.renderSettings || {
    showViewables: true,
    occlusion: false,
    showTextures: true
  };
  var eventBus = props.eventBus;
  /**
   * Dispatches the event if an eventBus is found.
   *
   * @param {MouseEvent} event MouseEvent that needs to be dispatched.
   * @private
   */

  function dispatchEvent(event) {
    if (eventBus) {
      eventBus.dispatchEvent(event);
    } else {
      console.warn("Please add an eventBus to dispatch events");
    }
  }

  function handleTreeNodeClick() {
    setFromDeviceTree(true);
    setCanClose(false);
  }

  eventBus.addEventListener(EventTypes.DEVICE_TREE_EXPAND_EVENT, handleTreeNodeClick); // Used to open the SurfaceShadingData icon by default.

  useEffect(function () {
    if (props.selectedGroupNode && props.selectedGroupNode.id != selectedNodeId && selectedNodeId) {
      // Change originating from deviceTree.
      if (!fromDeviceTree) {
        setCanClose(true);
      } // Change not originating from deviceTree.

    } else {
      setCanClose(true);
    }

    if (props.data.length > 0) setShowSSD(true);
    if (props.selectedGroupNode) setSelectedNodeId(props.selectedGroupNode.id);
  }, [props.selectedGroupNode]);

  var _useState15 = useState(null),
      _useState16 = _slicedToArray(_useState15, 2),
      arrowRef = _useState16[0],
      setArrowRef = _useState16[1];
  /**
   * Opens a menu to reveal {@link SurfaceShadingData}
   *
   * @param {MouseEvent} event Click event indicating that the first button has been selected.
   * @private
   */


  var handleSSDButtonClick = function handleSSDButtonClick(event) {
    setSSDButtonAnchor(event.currentTarget);
    setShowSSD(true);
    setCanClose(false);
    setDeviceButtonAnchor(null);
  };
  /**
   * Opens the device settings menu.
   *
   * @param {MouseEvent} event Click event indicating that the device button has been selected.
   * @private
   */


  var handleDeviceButtonClick = function handleDeviceButtonClick(event) {
    setShowSSD(false);
    setSSDButtonAnchor(null);
    setDeviceButtonAnchor(event.currentTarget);
  };
  /**
   * Uses the Data Visualization Extension to reflect device settings in the scene.
   *
   * @param {MouseEvent} event Click event indicating that the user has modified the
   * &nbsp;configuration in the device settings menu,
   * @private
   */


  var handleSettingsChange = function handleSettingsChange(event) {
    var newSettings = Object.assign({}, settings);

    if (event.target.type === "radio") {
      if (event.target.name === "heatmapType") {
        newSettings[event.target.name] = event.target.value;
      } else {
        newSettings[event.target.name] = event.target.value === "true";
      }
    } else {
      newSettings[event.target.name] = event.target.checked;
    }

    dispatchEvent({
      type: EventTypes.RENDER_SETTINGS_CHANGED,
      data: newSettings
    });
  };
  /**
   * Highlights the node in the forge viewer canvas.
   *
   * @param {MouseEvent} event MouseOver event indicating that a user has hovered over a group name.
   * @param {TreeNode} node Represents the group that a user has hovered over.
   * @private
   */


  function onMouseOver(event, node) {
    dispatchEvent({
      type: EventTypes.GROUP_SELECTION_MOUSE_OVER,
      originalEvent: event,
      data: node
    });
    event.stopPropagation();
  }
  /**
   * Removes node highlight shown in the forge viewer canvas.
   *
   * @param {MouseEvent} event MouseOver event indicating that a user has hovered over a group name.
   * @param {TreeNode} node Represents the group that a user has hovered over.
   * @private
   */


  function onMouseOut(event, node) {
    dispatchEvent({
      type: EventTypes.GROUP_SELECTION_MOUSE_OUT,
      originalEvent: event,
      data: node
    });
    event.stopPropagation();
  }
  /**
   * Updates the scene to show the selected group.
   *
   * @param {MouseEvent} event Click event indicating that a user has selected a group.
   * @param {TreeNode} node Represents the group that the user has selected.
   * @private
   */


  function onLabelClick(event, node) {
    dispatchEvent({
      type: EventTypes.GROUP_SELECTION_MOUSE_CLICK,
      originalEvent: event,
      data: node
    });
    event.stopPropagation();
  }
  /**
   * Called when a user selects the arrow icon in the groups menu to expand or close a group.
   *
   * @param {MouseEvent} event Click event indicating that a user has expanded/closed a grouping in the groups menu.
   * @param {TreeNode} node Node that user has selected to expand/close.
   * @private
   */


  function onIconClick(event, node) {
    dispatchEvent({
      type: EventTypes.GROUP_SELECTION_MOUSE_OUT,
      originalEvent: event,
      data: node
    });

    if (expandNodeId === node.id.toString()) {
      setExpandNodeId("");
    } else {
      setExpandNodeId(node.id.toString());
    }

    event.stopPropagation();
  }
  /**
   * Closes the surface shading data menu.
   *
   * @param {MouseEvent} event Click event indicating that the user has clicked elsewhere in the scene.
   * @private
   */


  var handleClickAway = function
    /* event */
  handleClickAway() {
    if (canClose) {
      setShowSSD(false);
      setCanClose(false);
    } else {
      setCanClose(true);
    }
  };
  /**
   * Closes the device settings menu,
   *
   * @param {MouseEvent} event Click event indicating that the user has clicked elsewhere in the scene.
   * @private
   */


  var handleSettingsClickAway = function
    /* event */
  handleSettingsClickAway() {
    setDeviceButtonAnchor(null);
  };
  /**
   * Creates a label to be displayed for the given node.
   *
   * @param {TreeNode} node
   * @returns a <React.Fragment> that represents a row in the {@link BasicTree}.
   * @private
   */


  function createLabel(node) {
    if (node.children.length > 0) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
        component: "div",
        noWrap: true
      }, node.name));
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "leafName"
      }, /*#__PURE__*/React.createElement(Typography, {
        noWrap: true
      }, node.name));
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "hyperionToolContainer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    className: "container-button",
    onClick: handleSSDButtonClick,
    ref: props.data.length > 0 ? setSSDButtonAnchor : null
  }, /*#__PURE__*/React.createElement(LayersIcon, {
    id: "layers-icon"
  })), /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClickAway
  }, /*#__PURE__*/React.createElement(Popper, {
    className: "popper",
    open: showSSD,
    anchorEl: ssdButtonAnchor,
    placement: "left-start",
    disablePortal: false,
    modifiers: {
      flip: {
        enabled: true
      },
      preventOverflow: {
        enabled: true,
        boundariesElement: "scrollParent"
      },
      arrow: {
        enabled: true,
        element: arrowRef
      }
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    ref: setArrowRef
  }), /*#__PURE__*/React.createElement(Typography, {
    id: "ssd-typography",
    component: "div"
  }, props.data.length > 0 ? /*#__PURE__*/React.createElement("div", {
    id: "ssd-tree-view"
  }, /*#__PURE__*/React.createElement(BasicTree, {
    data: props.data,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    onLabelClick: onLabelClick,
    onIconClick: onIconClick,
    expanded: expandNodeId,
    selectedNodeId: selectedNodeId,
    onLabelRequest: createLabel
  })) : /*#__PURE__*/React.createElement("span", null, "No SurfaceShadingData found."))))), !props.structureToolOnly && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
    id: "divider"
  }), /*#__PURE__*/React.createElement(IconButton, {
    className: "container-button",
    onClick: handleDeviceButtonClick
  }, /*#__PURE__*/React.createElement(SensorOptionIcon, null)), /*#__PURE__*/React.createElement(Popper, {
    className: "popper",
    open: Boolean(deviceButtonAnchor),
    anchorEl: deviceButtonAnchor,
    placement: "left-start",
    disablePortal: false,
    modifiers: {
      flip: {
        enabled: true
      },
      preventOverflow: {
        enabled: true,
        boundariesElement: "scrollParent"
      },
      arrow: {
        enabled: true,
        element: arrowRef
      }
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    ref: setArrowRef
  }), /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleSettingsClickAway
  }, /*#__PURE__*/React.createElement(Typography, {
    id: "settings-typography",
    component: "div"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    className: "form-group"
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: settings.showViewables,
      onChange: handleSettingsChange,
      name: "showViewables",
      size: "small",
      color: "default"
    }),
    label: "Sensors"
  })), /*#__PURE__*/React.createElement("div", {
    className: "radio-selection-form"
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    name: "occlusion",
    value: settings.occlusion,
    onChange: handleSettingsChange
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    value: true,
    control: /*#__PURE__*/React.createElement(Radio, {
      size: "small",
      color: "default"
    }),
    label: "Occluded view"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    value: false,
    control: /*#__PURE__*/React.createElement(Radio, {
      size: "small",
      color: "default"
    }),
    label: "Display all in front"
  }))), /*#__PURE__*/React.createElement(FormGroup, {
    className: "form-group"
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: settings.showTextures,
      onChange: handleSettingsChange,
      name: "showTextures",
      size: "small",
      color: "default"
    }),
    label: "Textures"
  })), /*#__PURE__*/React.createElement(Divider, {
    id: "form-divider",
    variant: "middle"
  }), /*#__PURE__*/React.createElement(FormGroup, {
    className: "form-group"
  }, /*#__PURE__*/React.createElement(FormLabel, {
    component: "legend",
    id: "form-label-hm"
  }, "Heatmap Types"), /*#__PURE__*/React.createElement(RadioGroup, {
    className: "hm-radio-group",
    name: "heatmapType",
    value: settings.heatmapType,
    onChange: handleSettingsChange
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    value: "GeometryHeatmap",
    control: /*#__PURE__*/React.createElement(Radio, {
      size: "small",
      color: "default"
    }),
    label: "Geometry"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    value: "PlanarHeatmap",
    control: /*#__PURE__*/React.createElement(Radio, {
      size: "small",
      color: "default"
    }),
    label: "Planar"
  }))))))), " ")));
}

var img$5 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1619.27 166.13'%3e %3cpolygon points='1619.27 4.34 1571.33 4.34 1513.91 68.46 1513.91 4.34 1473.66 4.34 1473.86 162.18 1513.91 162.18 1513.91 102.2 1568.37 162.18 1619.27 162.18 1545.88 84.25 1619.27 4.34'/%3e %3cpath d='M1479.12%2c135.19l-36.7-4.14c-21.51-2.37-26.83-7.7-26.83-15%2c0-8.09%2c11.05-15.39%2c32.55-15.39%2c20.72%2c0%2c31.57%2c7.7%2c33.54%2c19.34h39.46c-2-33.35-30-54.06-70.83-54.06-48.53%2c0-73%2c19.33-73%2c53.46%2c0%2c27.82%2c16.18%2c40.85%2c49.72%2c44.4l37.29%2c3.94c14.21%2c1.58%2c20.72%2c7.11%2c20.72%2c14.21%2c0%2c8.09-9.47%2c15.39-32.36%2c15.39-26.44%2c0-37.09-6.71-38.87-20.13h-38.67c1.78%2c36.31%2c25.45%2c54.85%2c76.16%2c54.85%2c46.36%2c0%2c72.21-20.32%2c72.21-50.9C1523.51%2c154.52%2c1508.12%2c138.54%2c1479.12%2c135.19Z' transform='translate(-70.36 -65.94)'/%3e %3cpolygon points='1159.96 162.18 1287.02 162.18 1287.02 128.05 1200.21 128.05 1200.21 99.44 1270.05 99.44 1270.05 65.11 1200.21 65.11 1200.21 38.47 1287.02 38.47 1287.02 4.34 1159.96 4.34 1159.96 162.18'/%3e %3cpath d='M1135.62%2c70.28h-73.79V228.12h73.79c56.63%2c0%2c72.21-21.11%2c72.21-80.11C1207.83%2c92.57%2c1192.84%2c70.28%2c1135.62%2c70.28ZM1134%2c194h-32V104.41h32c25.26%2c0%2c32.75%2c6.91%2c32.75%2c43.6C1166.79%2c181.55%2c1158.31%2c194%2c1134%2c194Z' transform='translate(-70.36 -65.94)'/%3e %3cpath d='M952.53%2c65.94c-57.42%2c0-87.21%2c35.31-87.21%2c82.86%2c0%2c47.75%2c29.79%2c83.26%2c87.21%2c83.26%2c57.61%2c0%2c87.4-35.51%2c87.4-83.26C1039.93%2c101.25%2c1010.14%2c65.94%2c952.53%2c65.94Zm0%2c130.61c-29.79%2c0-46.17-18.15-46.17-47.75%2c0-29%2c16.38-47.35%2c46.17-47.35%2c30%2c0%2c46.17%2c18.35%2c46.17%2c47.35C998.7%2c178.4%2c982.52%2c196.55%2c952.53%2c196.55Z' transform='translate(-70.36 -65.94)'/%3e %3cpolygon points='646.59 38.47 697.49 38.47 697.49 162.18 737.74 162.18 737.74 38.47 788.45 38.47 788.45 4.34 646.59 4.34 646.59 38.47'/%3e %3cpath d='M658.36%2c167.74c0%2c20.52-12.63%2c28.81-34.14%2c28.81-20.91%2c0-34.52-8.68-34.52-28.81V70.28H549.45v102c0%2c45.58%2c40.64%2c59.78%2c74.77%2c59.78%2c33.94%2c0%2c74.38-14.2%2c74.38-59.78v-102H658.36Z' transform='translate(-70.36 -65.94)'/%3e %3cpath d='M431.66%2c70.28%2c371.09%2c228.12h41.63l10.57-29.6h67.62l10.4%2c29.6h43L483%2c70.28Zm3.61%2c94.7%2c22.11-61.87L479.12%2c165Z' transform='translate(-70.36 -65.94)'/%3e %3cpath d='M71.6%2c228.13l141.34-87.92h73.32a4.28%2c4.28%2c0%2c0%2c1%2c4.28%2c4.29%2c3.72%2c3.72%2c0%2c0%2c1-2%2c3.6l-69.42%2c41.62c-4.51%2c2.7-6.09%2c8.12-6.09%2c12.18l-.07%2c26.23h88.22V75.69a5.41%2c5.41%2c0%2c0%2c0-5.64-5.42H211.36l-141%2c87.54v70.32Z' transform='translate(-70.36 -65.94)'/%3e%3c/svg%3e";

function timeEqual(a, b) {
  return a && b && a.getTime() == b.getTime();
}
/**
 * Converts a Date object into equivalent Epoch seconds
 * @param {Date} time A Date object
 * @returns {number} Time value expressed in Unix Epoch seconds
 */


function getTimeInEpochSeconds(time) {
  var epochSeconds = new Date(time).getTime() / 1000.0;
  return ~~epochSeconds; // Equivalent to Math.floor()
}
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


function getPaddedRange(series) {
  var percentage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var min = series[0] || Infinity;
  var max = series[0] || -Infinity;
  series.forEach(function (value) {
    if (value != null) {
      min = value < min ? value : min;
      max = value > max ? value : max;
    }
  });
  var padding = (max - min) * percentage / 100.0;
  return {
    min: Math.floor(min - padding),
    max: Math.ceil(max + padding)
  };
}

function getClosestValue(av, entry) {
  var propName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "avgValues";
  var tsValues = av.tsValues;
  var values = av[propName];
  var smallSide = null;
  var largeSide = null;
  var smallSideIndex;
  var largeSideIndex;

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
    var sTime = tsValues[smallSideIndex];
    var lTime = tsValues[largeSideIndex];
    var p = (entry - sTime) / (lTime - sTime);
    return smallSide * (1 - p) + largeSide * p;
  } else {
    return smallSide || largeSide || 0;
  }
}

function clamp(value, lower, upper) {
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
}

/**
 * The time slider component based off https://www.npmjs.com/package/chronos-etu.
 * @component
 * @param {Object} props
 * @param {Date} props.startTime The start time for the time range selected in the slider.
 * @param {Date} props.endTime The end time for the time range selected in the slider.
 * @param {String} props.rangeStart The earliest start date (in ISO string format) for the slider.
 * @param {String} props.rangeEnd The latest end date (in ISO string format) for the slider.
 * @param {HandleTimeRangeUpdated} props.onTimeRangeUpdated A callback
 * &nbsp;function to be invoked when the time selection is updated
 * @param {HandleCurrTimeUpdated} props.onCurrTimeUpdated A callback
 * &nbsp;handler invoked when the current time marker is updated without
 * &nbsp;changing the time selection.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.ChronosTimeSlider
 */

function ChronosTimeSlider(props) {
  /** @type {TimeSlider} */
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      timeSliderControl = _useState2[0],
      setTimeSliderControl = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      timeSliderView = _useState4[0],
      setTimeSliderView = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      timeSelectionId = _useState6[0],
      setTimeselectionId = _useState6[1];

  var containerRef = useRef();
  /**
   * Creates a timeline selection for the provided Date range.
   *
   * @param {Date} start Start date of the Date range.
   * @param {Date} end End date of the Date range.
   * @private
   */

  function createTimeSelection(start, end) {
    //Also zoom the slider to 5 days before and after the selection.
    if (start && end) {
      if (timeSelectionId) {
        removeTimeSelection(timeSelectionId);
      }
      /** @type {string} */


      var tsId = timeSliderControl.addTimeSelection(start.toISOString(), end.toISOString());
      var padding = 5; // days

      var zoomStart = new Date(start.getTime() - padding * 24 * 60 * 60 * 1000);
      var zoomEnd = new Date(end.getTime() + padding * 24 * 60 * 60 * 1000);
      timeSliderControl.zoomTo(zoomStart.toISOString(), zoomEnd.toISOString());
      timeSliderControl.mStartTime = props.startTime;
      timeSliderControl.mEndTime = props.endTime;
      setTimeselectionId(tsId);
    }
  }
  /**
   * Removes the time selection from the timeSliderControl.
   *
   * @param {string} tsId The id of the last timeSelection
   * @private
   */


  function removeTimeSelection(tsId) {
    timeSliderControl.removeTimeSelection(tsId);
    setTimeselectionId(null);
  }

  function getCurrentTheme() {
    var theme = darkGrayHighDensityTheme;
    return theme.resolvedRoles;
  }

  function updateTimeSliderContainer(parentCntr) {
    // the parentCntr is the DOM object that we will use as container to add pixi stage(canvas)
    if (parentCntr && parentCntr.children.length <= 0) {
      if (timeSliderView) {
        parentCntr.appendChild(timeSliderView);
        createTimeSelection(props.startTime, props.endTime);

        var resizeApp = function resizeApp() {
          var w = parentCntr.clientWidth;
          var h = parentCntr.clientHeight;
          timeSliderControl.resize(w, h);
        };

        window.onresize = resizeApp;
      }
    }
  }
  /**
   * Function to initialize the Timeslider
   * @property {TimeSlider} timeSliderControl
   * @private
   */


  function createTimeSlider() {
    var sliderWidth = containerRef.current.clientWidth;
    var sliderHeight = containerRef.current.clientHeight;
    var theme = getCurrentTheme();
    var timeSliderControl = new TimeSlider(sliderWidth, sliderHeight, props.rangeStart, props.rangeEnd, theme);
    timeSliderControl._timeFormat = "dddd, MMMM Do YYYY, HH:mm:ss";
    timeSliderControl._userDefinedTimeFormat = true;
    timeSliderControl.on("appready", function () {
      if (timeSliderControl.app && timeSliderControl.view()) {
        var timelineCanvas = timeSliderControl.view();
        timeSliderControl.off("appready"); // Unsubscribe event

        setTimeSliderView(timelineCanvas);
      }

      function onTimeRangeUpdated(data) {
        if (props.onTimeRangeUpdated) {
          var start = new Date(data.start);
          var end = new Date(data.end);
          var current = data.currentTime ? new Date(data.currentTime) : start;
          timeSliderControl.mStartTime = start;
          timeSliderControl.mEndTime = end;
          props.onTimeRangeUpdated(start, end, current);
        }
      }

      function onCurrTimeUpdated(data) {
        if (props.onCurrTimeUpdated) {
          var time = new Date(data.time);
          props.onCurrTimeUpdated(time);
        }
      } // Subscribe to other TimeSlider events


      timeSliderControl.on("tscreated", onTimeRangeUpdated);
      timeSliderControl.on("tsmodified", onTimeRangeUpdated);
      timeSliderControl.on("timemarkerchanged", onCurrTimeUpdated);
      timeSliderControl.on("playbackmarkerchanged", onCurrTimeUpdated);
      timeSliderControl.on("play", function () {// Calls the timeline.play() method
        // This emits a series of playbackmarkerchanged events
      });
      timeSliderControl.on("pause", onCurrTimeUpdated);
      timeSliderControl.on("stop", function () {// Calls timeline.stop() method
        // Moves currentTimeMarker to start of selection.
      });
    });
    timeSliderControl.mStartTime = props.startTime;
    timeSliderControl.mEndTime = props.endTime;
    setTimeSliderControl(timeSliderControl);
  }
  /**
   * Updates the time selection if the start or end times change.
   * @private
   */


  function updateSelection() {
    if (containerRef.current && timeSliderView && timeSliderControl && (!timeEqual(timeSliderControl.mStartTime, props.startTime) || !timeEqual(timeSliderControl.mEndTime, props.endTime))) {
      timeSliderControl.mStartTime = props.startTime;
      timeSliderControl.mEndTime = props.endTime; // Make sure the Start time is smaller than endTime otherwise addTimeSelection would fail

      if (timeSliderControl.mStartTime.getTime() <= timeSliderControl.mEndTime.getTime()) {
        createTimeSelection(props.startTime, props.endTime);
      }
    }
  }

  useEffect(function () {
    //This will be run exactly once to create the actual time slider.
    createTimeSlider();
    return function cleanUp() {
      if (timeSliderControl) {
        timeSliderControl.off("tscreated");
        timeSliderControl.off("tsdeleted");
        timeSliderControl.off("tsmodified");
        timeSliderControl.off("timemarkerchanged");
        timeSliderControl.off("playbackmarkerchanged");
        timeSliderControl.off("play");
        timeSliderControl.off("pause");
        timeSliderControl.off("stop");

        timeSliderControl._app._app.destroy(true); // Destroy the Pixi Application

      }
    };
  }, []);
  useEffect(function () {
    updateSelection();
  }, [props.startTime, props.endTime]);

  if (containerRef.current) {
    updateTimeSliderContainer(containerRef.current);
  }
  /**
   * The chronos timeslider does not fully support touch event
   * Simulate the touch event to pointer events
   * Hack? It is very common strategy when something out of our control
   */


  var lastDownEvent;

  function onTouchStart(event) {
    event.touches[0].pointerType = "pen";
    var mouseEvent = new PointerEvent("pointerdown", event.touches[0]);
    lastDownEvent = event.touches[0];

    if (timeSliderView) {
      timeSliderView.dispatchEvent(mouseEvent);
    }
  }

  function onTouchMove(event) {
    event.touches[0].pointerType = "pen";
    lastDownEvent = event.touches[0];
    var mouseEvent = new PointerEvent("pointermove", event.touches[0]);

    if (timeSliderView) {
      timeSliderView.dispatchEvent(mouseEvent);
    }
  }

  function onTouchEnd() {
    var mouseEvent = new PointerEvent("pointerup", lastDownEvent);

    if (timeSliderView) {
      timeSliderView.dispatchEvent(mouseEvent);
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    id: "timeline_header",
    ref: containerRef,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd
  });
}

/**
 * A basic date picker component.
 * @component
 *
 * @param {Object} props
 * @param {Date} props.startTime The start date for the DatePicker
 * @param {Date} props.endTime The end date for the DatePicker
 * @param {Date} props.disabledDate The last date the user can select from the DatePicker
 * @param {HandleTimeRangeUpdates} props.onRangeChange A callback
 * &nbsp;invoked when changes are made to the DatePicker.
 *
 * @returns {JSX.Element} The element that represents a BasicDatePicker object.
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.BasicDatePicker
 */

function BasicDatePicker(props) {
  var startDate = moment.utc(props.startTime);
  var endDate = moment.utc(props.endTime);
  var disableDates = moment.utc(props.disabledDate);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      focusedInput = _useState2[0],
      setFocusedInput = _useState2[1];
  /**
   * Called when a date change occurs in the picker.
   * @param {moment.Moment} start Start moment of date picked
   * @param {moment.Moment} end End moment of date picked
   * @private
   */


  function handleDateChange(start, end) {
    start = start ? moment.utc(start).toDate() : props.startTime;
    end = end ? moment.utc(end).toDate() : props.endTime;

    if (props.onRangeChange && (!timeEqual(props.startTime, start) || !timeEqual(props.endTime, end))) {
      props.onRangeChange(start, end);
    }
  }

  var isOutsideRange = function isOutsideRange(day) {
    return day.isAfter(disableDates);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "date-picker-container"
  }, /*#__PURE__*/React.createElement(DateRangePicker, {
    startDate: startDate,
    startDateId: "start_date_id",
    endDate: endDate,
    endDateId: "end_date_id",
    onDatesChange: function onDatesChange(_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;
      return handleDateChange(startDate, endDate);
    },
    focusedInput: focusedInput,
    onFocusChange: function onFocusChange(focusedInput) {
      return setFocusedInput(focusedInput);
    },
    displayFormat: "MMM D,Y",
    isOutsideRange: isOutsideRange,
    minimumNights: 0
  }));
}

/**
 * A menu to pick sensor type and resolution
 * @component
 *
 * @param {Object} props
 * @param {string} props.resolutionValue Data resolution vaue. Ex. PT1H, PT15M etc.
 * @param {string} props.selectedPropertyId String identifer of selected property.
 * @param {boolean} props.showHeatMap Flag that shows heatmap when true and hides heatmap when false.
 * @param {Map.<string,DeviceProperty>} props.deviceModelProperties Map of all the properties across all devicesModels in a {@link DataStore} object.
 * @param {OnHeatMapOptionChange} props.onHeatmapOptionChange A callback function invoked when any combination of
 * &nbsp;resolutionValue, selectedPropertyId, and showHeatMap are changed.
 *
 * @memberof Autodesk.DataVisualization.UI.HeatmapOptions
 * @alias Autodesk.DataVisualization.UI.HeatmapOptions.HeatmapSelectionMenu
 */

function HeatmapSelectionMenu(props) {
  var resolutionValue = props.resolutionValue;
  var selectedPropertyId = props.selectedPropertyId;
  var showHeatMap = props.showHeatMap;
  /**
   * Updates showheatMap based on user selection.
   *
   * @param {MouseEvent} event Click event indication that user has modified showHeatmap.
   * @private
   */

  var onHeatmapCheckboxChange = function
    /* event */
  onHeatmapCheckboxChange() {
    if (props.onHeatmapOptionChange) {
      props.onHeatmapOptionChange({
        resolutionValue: resolutionValue,
        selectedPropertyId: selectedPropertyId,
        showHeatMap: !showHeatMap
      });
    }
  };
  /**
   * Updates resolutionValue based on user selection.
   *
   * @param {MouseEvent} event Click event indicating that user has modified the resolution value.
   * @private
   */


  function onResolutionChange(event) {
    if (props.onHeatmapOptionChange) {
      props.onHeatmapOptionChange({
        resolutionValue: event.target.value,
        selectedPropertyId: selectedPropertyId,
        showHeatMap: showHeatMap
      });
    }
  }
  /**
   * Updates selectedPropertyId based on user selection.
   *
   * @param {MouseEvent} event Click event indicating that user has modified the selectedProperty.
   * @private
   */


  function onSensorTypeChange(event) {
    if (props.onHeatmapOptionChange) {
      props.onHeatmapOptionChange({
        resolutionValue: resolutionValue,
        selectedPropertyId: event.target.value,
        showHeatMap: showHeatMap
      });
    }
  }
  /**
   * Generates a list of selectable property options to display.
   *
   * @returns {JSX.Element[]}
   * @private
   */


  function generateSensorProperties() {
    var allProperties = _toConsumableArray(props.deviceModelProperties.keys());

    return allProperties.map(function (propId) {
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: propId,
        value: propId
      }, propId);
    });
  }
  /**
   * Generates a list of selectable resolution values to display.
   *
   * @returns {JSX.Element[]}
   * @private
   */


  function generateResolutions() {
    var resolutionOptionKeys = ["1 day", "6 hrs", "1 hr", "15 mins", "5 min"];
    var resolutionOptionVals = ["P1D", "PT6H", "PT1H", "PT15M", "PT5M"];
    return resolutionOptionKeys.map(function (option, index) {
      return /*#__PURE__*/React.createElement(MenuItem, {
        key: option,
        value: resolutionOptionVals[index]
      }, option);
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    id: "heatmapSelection"
  }, /*#__PURE__*/React.createElement(FormControl, {
    id: "property-form"
  }, /*#__PURE__*/React.createElement(TextField, {
    select: true,
    variant: "filled",
    margin: "normal",
    value: selectedPropertyId,
    onChange: function onChange(event) {
      return onSensorTypeChange(event);
    },
    InputProps: {
      disableUnderline: true
    }
  }, generateSensorProperties())), /*#__PURE__*/React.createElement(FormControl, {
    id: "resolution-form"
  }, /*#__PURE__*/React.createElement(TextField, {
    select: true,
    variant: "filled",
    margin: "normal",
    value: resolutionValue,
    onChange: function onChange(event) {
      return onResolutionChange(event);
    },
    InputProps: {
      disableUnderline: true
    }
  }, generateResolutions())), /*#__PURE__*/React.createElement(Tooltip, {
    title: showHeatMap ? "Hide HeatMap" : "Show HeatMap"
  }, /*#__PURE__*/React.createElement(IconButton, {
    id: "showHeatMap",
    onClick: onHeatmapCheckboxChange
  }, showHeatMap ? /*#__PURE__*/React.createElement(VisibilityIcon, {
    id: "visibility-icon"
  }) : /*#__PURE__*/React.createElement(VisibilityOffIcon, {
    id: "visibility-icon"
  }))));
}
/**
 * A linear gradient slider with labeled marks
 * @component
 *
 * @param {Object} props
 * @param {string} props.selectedPropertyId The property ID, if any is selected.
 * @param {Object.<string, number[]>} props.propIdGradientMap The mapping of property
 * IDs to their corresponding gradient color values.
 * @param {GetPropertyRanges} props.getPropertyRanges The function to get the selected property's range and dataUnit
 * @param {number} props.totalMarkers The total number of slider marks to display on the slider.
 *
 * @memberof Autodesk.DataVisualization.UI.HeatmapOptions
 * @alias Autodesk.DataVisualization.UI.HeatmapOptions.GradientBar
 */


function GradientBar(props) {
  var useSliderStyle = makeStyles({
    rail: {
      backgroundImage: function backgroundImage(props) {
        return props.backgroundImage;
      }
    }
  });

  var _useState = useState([{
    value: 20,
    label: "1"
  }, {
    value: 40,
    label: "2"
  }, {
    value: 60,
    label: "3"
  }, {
    value: 80,
    label: "4"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      sliderMarks = _useState2[0],
      setSliderMarks = _useState2[1];
  /**
   *
   * @param {Object.<string, number[]>} propIdGradientMap A mapping of property IDs to their corresponding gradient color values.
   * @param {string} propertyId string identifier of selected property.
   *
   * @returns {string} String representation of the background gradient image used for the slider.
   * @private
   */


  function generateGradientStyle(propIdGradientMap, propertyId) {
    var colorStops = propIdGradientMap[propertyId];
    colorStops = colorStops ? colorStops : [0xf9d423, 0xff4e50]; // Default colors.

    var colorStopsHex = colorStops.map(function (c) {
      return "#".concat(c.toString(16).padStart(6, "0"));
    });
    return "linear-gradient(.25turn, ".concat(colorStopsHex.join(", "), ")");
  }
  /**
   * Get the HeatMap Slider markers based on the selected SensorType
   *
   * @param {string} propertyId Selected sensor type
   * @private
   */


  function generateMarks(propertyId) {
    var localMarks = [];
    var totalMarkers = props.totalMarkers ? props.totalMarkers : 4; // Generate [1, 2, 3, ..., totalMarkers ]

    var seeds = Array.from({
      length: totalMarkers
    }, function (_, x) {
      return x + 1;
    });
    var valueOffset = 100.0 / (totalMarkers + 1.0); // Get the selected property's range min, max and dataUnit value from Ref App

    var propertyInfo = props.getPropertyRanges(propertyId);
    var delta = (propertyInfo.rangeMax - propertyInfo.rangeMin) / (totalMarkers + 1.0);
    localMarks = seeds.map(function (i) {
      return {
        value: i * valueOffset,
        label: "".concat((propertyInfo.rangeMin + i * delta).toFixed()).concat(propertyInfo.dataUnit)
      };
    });
    return localMarks;
  }

  useEffect(function () {
    // Re-generate slider marks based on the selected property type.
    setSliderMarks(generateMarks(props.selectedPropertyId));
  }, [props.selectedPropertyId]);
  var classes = useSliderStyle({
    // Generate slider gradient styles based on the color stops specified and selected property.
    backgroundImage: generateGradientStyle(props.propIdGradientMap, props.selectedPropertyId)
  });
  return /*#__PURE__*/React.createElement(Slider, {
    classes: classes,
    valueLabelDisplay: "off",
    marks: sliderMarks,
    track: false,
    disabled: true
  });
}
/**
 * The HeatmapOptions component with a linear gradient and an options menu.
 * @component
 *
 * @param props
 * @param {string} props.selectedPropertyId The property id, if any is selected
 * @param {Object.<string, number[]>} props.propIdGradientMap The mapping of property
 * IDs to their corresponding gradient color values.
 * @param {GetPropertyRanges} props.getPropertyRanges The function to get the selected property's range and dataUnit
 * @param {number} props.totalMarkers The total number of slider markers
 * @param {string} props.resolutionValue The value for resolution. Ex. PT1H, PT15M etc.
 * @param {boolean} props.showHeatMap Flag to show/hide heatmap
 * @param {OnHeatMapOptionChange} props.onHeatMapOptionChange A callback function invoked when any combination of
 * &nbsp;resolutionValue, selectedPropertyId, and showHeatMap are changed.
 * @param {Map.<string, DeviceProperty>} props.deviceModelProperties  Map of all the properties across all devicesModels in a {@link DataStore} object.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.HeatmapOptions
 */


function HeatmapOptions(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "heatmapOptions_Container"
  }, /*#__PURE__*/React.createElement(GradientBar, props), /*#__PURE__*/React.createElement(HeatmapSelectionMenu, props));
}

var img$4 = "data:image/svg+xml,%3csvg width='164' height='164' viewBox='0 0 164 164' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg filter='url(%23filter0_d)'%3e%3ccircle cx='81.7363' cy='81.8212' r='70.3389' fill='%23535353'/%3e%3ccircle cx='81.7363' cy='81.8212' r='62.3112' stroke='white' stroke-width='16.0554'/%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d' x='0.174763' y='0.259602' width='163.123' height='163.123' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='5.61135'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3csvg width='164' height='164' viewBox='0 0 164 164' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg filter='url(%23filter0_d)'%3e%3ccircle cx='81.7363' cy='81.8212' r='70.3389' fill='%2338ABDF'/%3e%3ccircle cx='81.7363' cy='81.8212' r='62.3112' stroke='white' stroke-width='16.0554'/%3e%3c/g%3e%3cdefs%3e%3cfilter id='filter0_d' x='0.174763' y='0.259602' width='163.123' height='163.123' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3e%3cfeOffset/%3e%3cfeGaussianBlur stdDeviation='5.61135'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3crect x='4.05469' y='5.3623' width='1.6776' height='3.70618' rx='0.8388' transform='rotate(-90 4.05469 5.3623)' fill='%23D0D0D0'/%3e%3crect x='4.05469' y='8.38477' width='1.6776' height='3.70618' rx='0.8388' transform='rotate(-90 4.05469 8.38477)' fill='%23D0D0D0'/%3e%3ccircle cx='3.65285' cy='13.9224' r='3.39211' fill='%23D0D0D0'/%3e%3crect x='2.06152' y='0.723633' width='3.05785' height='12.7296' rx='1.52893' fill='%23D0D0D0'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg width='11' height='16' viewBox='0 0 11 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.56639 8.05657L5.4532 0.124023L1.33802 8.06044C1.0951 8.41019 0.89567 8.79239 0.747533 9.19923L0.734268 9.22481H0.738297C0.54973 9.75163 0.447021 10.3193 0.447021 10.9109C0.447021 13.6747 2.68852 15.9152 5.45355 15.9152C8.21857 15.9152 10.4601 13.6747 10.4601 10.9109C10.4601 10.3193 10.3574 9.75163 10.1688 9.22481H10.1721L10.1612 9.20364C10.0123 8.79366 9.8114 8.40864 9.56639 8.05657Z' fill='%23D0D0D0'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.0349 5.77599C11.9509 5.8125 10.8978 6.14628 9.99073 6.74085C9.73297 6.38362 9.3651 6.12086 8.94359 5.9929C9.04686 5.35304 9.33551 4.75753 9.77382 4.28008C10.5218 3.53212 11.6587 3.42741 11.6587 2.298C11.6587 1.40045 11.0079 0.555259 8.97351 0.555259C8.59313 0.511025 8.20767 0.552507 7.84541 0.676663C7.48315 0.800819 7.15327 1.0045 6.87999 1.27276C6.60671 1.54102 6.39695 1.86706 6.2661 2.22695C6.13525 2.58685 6.08662 2.97148 6.1238 3.35261C6.16254 4.43732 6.49892 5.49047 7.09614 6.39679C6.742 6.6576 6.48004 7.02434 6.34818 7.44393C5.70555 7.34249 5.10714 7.05368 4.62789 6.6137C3.87993 5.86574 3.76774 4.72885 2.6458 4.72885C1.7333 4.72885 0.88811 5.37209 0.88811 7.41401C0.843682 7.79508 0.885287 8.18126 1.00986 8.54413C1.13443 8.90699 1.3388 9.23729 1.60792 9.51072C1.87704 9.78415 2.20406 9.99373 2.5649 10.1241C2.92574 10.2544 3.31122 10.3021 3.69294 10.2637C4.78114 10.2253 5.83742 9.88613 6.7446 9.2839C7.00236 9.64113 7.37022 9.90389 7.79174 10.0319C7.69041 10.6767 7.4017 11.2776 6.96151 11.7596C6.21355 12.5076 5.07666 12.6123 5.07666 13.7342C5.07666 14.6393 5.72738 15.4845 7.76182 15.4845C8.1422 15.5287 8.52766 15.4872 8.88992 15.363C9.25218 15.2389 9.58205 15.0352 9.85534 14.767C10.1286 14.4987 10.3384 14.1727 10.4692 13.8128C10.6001 13.4529 10.6487 13.0682 10.6115 12.6871C10.5716 11.6026 10.2354 10.5497 9.63919 9.64292C9.99642 9.38516 10.2592 9.01729 10.3871 8.59578C11.0289 8.69511 11.6273 8.98126 12.1074 9.41853C12.8554 10.1665 12.9601 11.3109 14.0895 11.3109C14.9871 11.3109 15.8323 10.6601 15.8323 8.61822C15.8767 8.23813 15.8353 7.85291 15.7111 7.49095C15.5869 7.12898 15.3831 6.79949 15.1147 6.52675C14.8463 6.25401 14.5201 6.04498 14.1601 5.91504C13.8002 5.78511 13.4157 5.73759 13.0349 5.77599ZM8.36766 7.08491C8.55289 7.08343 8.73438 7.137 8.88911 7.23883C9.04385 7.34066 9.16484 7.48615 9.23675 7.65685C9.30867 7.82756 9.32825 8.01577 9.29303 8.19763C9.2578 8.37948 9.16935 8.54677 9.0389 8.67827C8.90845 8.80977 8.74187 8.89956 8.56031 8.93625C8.37875 8.97294 8.19038 8.95486 8.0191 8.88432C7.84783 8.81378 7.70137 8.69396 7.5983 8.54005C7.49523 8.38614 7.44021 8.20509 7.4402 8.01986C7.44019 7.77318 7.53767 7.5365 7.71139 7.36138C7.88511 7.18626 8.121 7.08688 8.36766 7.08491Z' fill='%23D0D0D0'/%3e%3c/svg%3e";

var SpriteSize = 24;
/**
 * @type {SensorStyleDefinitions}
 */

var SensorStyleDefinitions = {
  default: {
    url: img$4,
    highlightedUrl: img$3,
    color: 0xffffff,
    highlightedColor: 0xffffff //You may use this instead of highlightedUrl and highlightedColor to simply color over the regular url image
    // highlightedColor: 0xa1c5ff,

  }
};
/**
 * A map that maps a property ID with its corresponding color stop values.
 * This mapping is used for both heatmap rendering, as well as for heatmap
 * slider background color. See registerSurfaceShadingColors API for usage
 * details.
 */

var PropIdGradientMap = {
  Temperature: [0x0000ff, 0x00ff00, 0xffff00, 0xff0000],
  Humidity: [0x00f260, 0x0575e6],
  "CO₂": [0x1e9600, 0xfff200, 0xff0000]
};
var PropertyIconMap = {
  Temperature: img$2,
  Humidity: img$1,
  "CO₂": img
};

var endRange = new Date(new Date().getTime() + 7 * 60 * 60 * 1000 * 24);
var startRange = new Date("2020-01-01T00:00:00Z"); // TODO: This function does not sound like it belongs in the main application
//  file, more suitable to be in a "device utility file". Move this to where
//  it rightfully belong.

/**
 * Creates the initial device-id-to-style map for all the device models found
 * defined in the downloaded list.
 *
 * @returns {Object.<string, ViewableStyle>} The style map
 * that maps a given device model ID to the corresponding {@link ViewableStyle}.
 *
 * @memberof Autodesk.DataVisualization.UI.BaseApp
 */

function initialDeviceModelStyleMap(surfaceShadingConfig) {
  var styleMap = {};
  var styleDef = SensorStyleDefinitions;

  if (surfaceShadingConfig && surfaceShadingConfig.deviceStyles) {
    styleDef = surfaceShadingConfig.deviceStyles;
  } // Create model-to-style map from style definitions.


  var DataVizCore = Autodesk.DataVisualization.Core;
  Object.entries(styleDef).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        deviceModelId = _ref2[0],
        styleDef = _ref2[1];

    styleMap[deviceModelId] = new DataVizCore.ViewableStyle(DataVizCore.ViewableType.SPRITE, new THREE.Color(styleDef.color), styleDef.url, new THREE.Color(styleDef.highlightedColor), styleDef.highlightedUrl, styleDef.animatedUrls);
  });
  return styleMap;
}
/**
 * Configure default start/end date to be ranging from two weeks
 * in the past, to tomorrow. Also the current time to be now.
 */

var currDate = new Date();
currDate.setUTCHours(0, 0, 0, 0);
var endDate = new Date(currDate.getTime() + 1 * 24 * 60 * 60 * 1000);
endDate.setUTCHours(0, 0, 0, 0);
var startDate = new Date(currDate.getTime() - 14 * 24 * 60 * 60 * 1000);
startDate.setUTCHours(0, 0, 0, 0);
/**
 * Main Base App component.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.appData Data passed to the BaseApp.
 * @param {("AutodeskStaging"|"AutodeskProduction")} props.appData.env Forge API environment
 * @param {string} props.appData.docUrn Document URN of model
 * @param {string} props.appData.adapterType Corresponds to Data Adapter used to query data. i.e - synthetic, azure etc.
 * @param {"derivativeV2"|"derivativeV2_EU"|"modelDerivativeV2"|"fluent"|"D3S"|"D3S_EU"} [props.appData.api] Please refer to LMV documentation for more information.
 * @param {string} [props.appData.dataStart] Start date for provided CSV data in ISO string format.
 * @param {string} [props.appData.dataEnd] End date for provided CSV data in ISO string format.
 * @param {EventBus} props.eventBus Used to dispatch mouse events when a user interacts with a {@link TreeNode}
 * @param {Object} props.appContext Contains base urls used to query assets, LMV, data etc.
 * @param {string} [props.appContext.dataUrl] The base url used to configure a specific {@link DataAdapter}
 * @param {Object} props.data
 * @param {SurfaceShadingData} props.data.shadingData {@link SurfaceShadingData} associated with the model.
 * @param {TreeNode[]} props.data.devicePanelData Represents array of device {@link TreeNode} in the scene.
 * @param {Object} [props.renderSettings]
 * @param {boolean} [props.renderSettings.showViewables] Defines whether {@link SpriteViewable} are visible in the scene.
 * @param {boolean} [props.renderSettings.occlusion] Defines whether {@link SpriteViewable} are occluded.
 * @param {boolean} [props.renderSettings.showTextures] Defines whether textures are shown.
 * @param {"GeometryHeatmap"|"PlanarHeatmap"} [props.renderSettings.heatmapType] Heatmap type to render in scene.
 * @param {Object} [props.surfaceShadingConfig]
 * @param {number} [props.surfaceShadingConfig.spriteSize] Defines the size of a {@link SpriteViewable}
 * @param {Object.<string, Object>} [props.surfaceShadingConfig.deviceStyles] Represents different style definitions for a {@link SpriteViewable}
 * @param {Object.<string, number[]>} [props.surfaceShadingConfig.gradientSetting] Mapping of proerties to corresponding gradient bar color stop values.
 * @param {Object} [props.propertyIconMap]  A mapping of property names to image paths used for each {@link DeviceStats} object.
 * @param {number} [props.geomIndex] Index of geometry to load in scene.
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.BaseApp
 */

function BaseApp(props) {
  /**
   * Most import variables that will define the behavior of this APP.
   * env: String -- AutodeskProduction/AutodeskStaging
   * api: "derivativeV2"|"derivativeV2_EU"|"modelDerivativeV2"|"fluent"|"D3S"|"D3S_EU" -- Please refer to LMV documentation
   * docUrn: String -- the document user want to load
   */
  var _props$appData = props.appData,
      env = _props$appData.env,
      docUrn = _props$appData.docUrn,
      adapterType = _props$appData.adapterType,
      api = _props$appData.api;
  /**
   * Function to get the access token used to load the model into {@link Viewer}
   * @private
   */

  function getToken() {
    return _getToken.apply(this, arguments);
  }

  function _getToken() {
    _getToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", fetch("/api/token").then(function (res) {
                return res.json();
              }).then(function (data) {
                return data.access_token;
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getToken.apply(this, arguments);
  }

  var DataAdapter = RestApiDataAdapter;

  if (adapterType == "azure") {
    DataAdapter = AzureDataAdapter;
  } // calculate start/end range of the timeline if there is limitted data range
  // override the timeslider with the date range (from CSV or other database)


  if (props.appData.dataStart && props.appData.dataEnd) {
    var dataStart = new Date(props.appData.dataStart);
    var dataEnd = new Date(props.appData.dataEnd);
    startRange.setTime(dataStart.getTime());
    endRange.setTime(dataEnd.getTime());

    if (startDate.getTime() < startRange.getTime() || startDate.getTime() >= endRange.getTime()) {
      startDate.setTime(startRange.getTime());
    }

    if (endDate.getTime() <= startRange.getTime() || endDate.getTime() >= endRange.getTime()) {
      endDate.setTime(endRange.getTime());
    }

    if (currDate.getTime() <= startRange.getTime() || currDate.getTime() >= endRange.getTime()) {
      currDate.setTime(endRange.getTime());
    } // give it a little bit buffer to make the range selection visible


    startRange.setTime(dataStart.getTime() - 2 * 60 * 60 * 24 * 1000);
    endRange.setTime(dataEnd.getTime() + 2 * 60 * 60 * 24 * 1000);
  }

  var lmvViewerRef = useRef(null);
  var activeListenersRef = useRef({});
  var appStateRef = useRef(null);
  var timeOptionRef = useRef(null);
  var hoveredDeviceInfoRef = useRef({});
  var selectedGroupNodeRef = useRef();
  var needRefreshHeatmapRef = useRef(false);

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      hoveredDeviceInfo = _useState2[0],
      setHoveredDeviceInfo = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      appState = _useState4[0],
      setAppState = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      deviceTree = _useState6[0],
      setDeviceTree = _useState6[1];

  var _useState7 = useState(""),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedDevice = _useState8[0],
      setSelectedDevice = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedGroupNode = _useState10[0],
      setSelectedGroupNode = _useState10[1];

  var _useState11 = useState(Object.assign({}, {
    showViewables: true,
    occlusion: false,
    showTextures: true,
    heatmapType: "GeometryHeatmap"
  }, props.renderSettings)),
      _useState12 = _slicedToArray(_useState11, 2),
      renderSettings = _useState12[0],
      setRenderSettings = _useState12[1];

  var currentSurfaceShadingGroupRef = useRef("");

  var _useState13 = useState({
    resolutionValue: "PT1H",
    showHeatMap: true
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      heatmapOptions = _useState14[0],
      setHeatmapOptions = _useState14[1];

  var _useState15 = useState({
    endTime: endDate,
    startTime: startDate,
    resolution: heatmapOptions.resolutionValue,
    currentTime: currDate
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      timeOptions = _useState16[0],
      setTimeOptions = _useState16[1];

  var _useState17 = useState(""),
      _useState18 = _slicedToArray(_useState17, 2);
      _useState18[0];
      var setDataContext = _useState18[1];

  var currentDeviceDataRef = useRef({});
  var chartDataRef = useRef({});
  timeOptionRef.current = timeOptions;
  appStateRef.current = appState;
  hoveredDeviceInfoRef.current = hoveredDeviceInfo;
  useEffect(function () {
    document.title = "Hyperion Reference App";
    return function cleanUp() {
      var viewer = lmvViewerRef.current;
      var listeners = activeListenersRef.current;

      if (viewer) {
        for (var key in listeners) {
          viewer.removeEventListener(key, listeners[key]);
        }

        activeListenersRef.current = {};
      }
    };
  }, []);
  useEffect(function () {
    if (props.data) {
      onDataReady();
    }
  }, [props.data]);
  /**
   * Adjust the current time window of the given DataView object.
   *
   * @param {Date} startTime The start time of the time window
   * @param {Date} endTime The end time of the time window
   * @param {DataView} dataView The DataView object whose time
   * window is to be adjusted.
   * @private
   */

  function setTimeWindow(startTime, endTime, dataView) {
    var resolution = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : timeOptionRef.current.resolution;
    var startSecond = getTimeInEpochSeconds(startTime);
    var endSecond = getTimeInEpochSeconds(endTime);
    var span = new DateTimeSpan(startSecond, endSecond, resolution);
    dataView.setTimeWindow(span);
  }

  function dispatchEventToHandler(event) {
    if (props.eventBus && props.eventBus.dispatchEvent) {
      props.eventBus.dispatchEvent(event);
    }
  }
  /**
   * Initializes a {@link DataStore} to generate a corresponding {@link DataView}.
   * @alias Autodesk.DataVisualization.UI.BaseApp#initializeDataStore
   * @private
   */


  function initializeDataStore() {
    return _initializeDataStore.apply(this, arguments);
  } // Called when heatmap type has changed.


  function _initializeDataStore() {
    _initializeDataStore = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var adapter, session, masterDataView, deviceModels;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // Create a data adapter to pull in data from server.
              adapter = new DataAdapter(adapterType, props.appContext.dataUrl); // Register the adapter and pull in all device models.

              session = new Session();
              session.dataStore.registerDataAdapter(adapter);
              session.dataStore.addEventListener(EventType.QueryCompleted, function () {
                needRefreshHeatmapRef.current = true;
              });
              _context3.next = 6;
              return session.dataStore.loadDeviceModelsFromAdapters();

            case 6:
              masterDataView = session.dataStore.createView(); // Add all known devices to masterDataView so they are watched.

              deviceModels = session.dataStore.deviceModels;
              deviceModels.forEach(function (deviceModel) {
                // Get all the properties that belong to this device type.
                var pids = deviceModel.properties.map(function (p) {
                  return p.id;
                });
                deviceModel.devices.forEach(function (device) {
                  // Add a device and all its properties into the view.
                  masterDataView.addDeviceProperties(device.id, pids);
                });
              });
              setTimeWindow(timeOptions.startTime, timeOptions.endTime, masterDataView);
              return _context3.abrupt("return", [session, masterDataView]);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _initializeDataStore.apply(this, arguments);
  }

  useEffect(function () {
    function updateHeatmapType() {
      return _updateHeatmapType.apply(this, arguments);
    }

    function _updateHeatmapType() {
      _updateHeatmapType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var currAppState, currentSelectedNode;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currAppState = appStateRef.current;

                if (!currAppState.dataVizExtn) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return currAppState.dataVizExtn.setupSurfaceShading(currAppState.model, currAppState.shadingData, {
                  type: renderSettings.heatmapType
                });

              case 4:
                currentSelectedNode = selectedGroupNodeRef.current;
                currAppState.dataVizExtn.renderSurfaceShading(currentSelectedNode.id, heatmapOptions.selectedPropertyId, getSensorValue);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _updateHeatmapType.apply(this, arguments);
    }

    updateHeatmapType();
  }, [renderSettings.heatmapType]);
  /**
   * Called by {@link Viewer} when the model has been loaded.
   *
   * @param {Autodesk.Viewing.GuiViewer3D} viewer Instance of Forge Viewer
   * @param {*} data
   * @callback
   */

  function onModelLoaded(_x, _x2) {
    return _onModelLoaded.apply(this, arguments);
  }

  function _onModelLoaded() {
    _onModelLoaded = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(viewer, data) {
      var _yield$initializeData, _yield$initializeData2, session, masterDataView, dataVizExtn;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return initializeDataStore();

            case 2:
              _yield$initializeData = _context5.sent;
              _yield$initializeData2 = _slicedToArray(_yield$initializeData, 2);
              session = _yield$initializeData2[0];
              masterDataView = _yield$initializeData2[1];
              dataVizExtn = viewer.getExtension("Autodesk.DataVisualization"); // Optional: load the MinimapExtension
              // viewer.loadExtension('Autodesk.AEC.Minimap3DExtension')

              props.eventBus.addEventListener(EventTypes.RENDER_SETTINGS_CHANGED, /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {
                  var newSettings, occlusion, showViewables, showTextures;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!event.hasStopped) {
                            newSettings = event.data;
                            occlusion = newSettings.occlusion, showViewables = newSettings.showViewables, showTextures = newSettings.showTextures;
                            setRenderSettings(newSettings);
                            dataVizExtn.showHideViewables(showViewables, occlusion);

                            if (showTextures) {
                              dataVizExtn.showTextures();
                            } else {
                              dataVizExtn.hideTextures();
                            }
                          }

                        case 1:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x5) {
                  return _ref3.apply(this, arguments);
                };
              }());
              dispatchEventToHandler({
                type: EventTypes.MODEL_LOAD_COMPLETED,
                data: {
                  viewer: viewer,
                  data: data,
                  session: session
                }
              });
              setAppState({
                viewer: viewer,
                session: session,
                masterDataView: masterDataView,
                model: data.model,
                dataVizExtn: dataVizExtn
              });

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _onModelLoaded.apply(this, arguments);
  }

  function onDataReady() {
    return _onDataReady.apply(this, arguments);
  }
  /**
   * Called when by {@link Viewer} when Forge Viewer has been initialized.
   *
   * @param {Autodesk.Viewing.GuiViewer3D} viewer Instance of Forge Viewer
   * @callback
   */


  function _onDataReady() {
    _onDataReady = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var session, masterDataView, viewer, model, dataVizExtn, DataVizCore, styleMap, _props$data, shadingData, devicePanelData, leafNodes, handleTreeNodeClick, highlightOnMouseOver, getViewableStyle, generateViewables, _generateViewables, processEvent, onItemClick, onItemHovering, _onItemHovering, updateDataStore, completeDeviceTree, itemClickListener, itemHoverListener, createWebsocket, _createWebsocket;

      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _createWebsocket = function _createWebsocket3() {
                _createWebsocket = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(session) {
                  var dataStore, socket;
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          dataStore = session.dataStore; // console.log("Starting websocket");

                          socket = new io({
                            path: "/api/socket"
                          });
                          socket.on("connect", function () {// console.log("Socket open.");
                          });
                          socket.on("iot-data", function (message) {
                            var events = JSON.parse(message);

                            var _iterator2 = _createForOfIteratorHelper(events),
                                _step2;

                            try {
                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var e = _step2.value;
                                var deviceId = e["DeviceId"];

                                for (var _i2 = 0, _Object$entries = Object.entries(e); _i2 < _Object$entries.length; _i2++) {
                                  var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                                      key = _Object$entries$_i[0],
                                      value = _Object$entries$_i[1];

                                  if (key === "timeStamp" || key === "DeviceId") continue; //Outside of timeStamp and DeviceId all other keys are properties

                                  dataStore.updateCurrentPropertyValue(deviceId, key, value);
                                }
                              }
                            } catch (err) {
                              _iterator2.e(err);
                            } finally {
                              _iterator2.f();
                            }
                          });
                          socket.on("disconnect", function () {// console.log("Socket Disconnection");
                          });

                        case 5:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));
                return _createWebsocket.apply(this, arguments);
              };

              createWebsocket = function _createWebsocket2(_x8) {
                return _createWebsocket.apply(this, arguments);
              };

              updateDataStore = function _updateDataStore(adapter) {
                var dataStore = session.dataStore;
                adapter = adapter || dataStore.adapters[0];
                var nodes = [];
                shadingData.getChildLeafs(nodes);
                var model = new DeviceModel("synthetic_device_model_" + new Date().getTime(), adapter.id);
                var hasData = false;

                for (var _i = 0, _nodes = nodes; _i < _nodes.length; _i++) {
                  var node = _nodes[_i];

                  var _iterator = _createForOfIteratorHelper(node.shadingPoints),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var sp = _step.value;
                      var dm = dataStore.getDeviceModelFromDeviceId(sp.id);

                      if (!dm) {
                        var deviceObj = model.addDevice(sp.id);
                        deviceObj.name = sp.name;
                        deviceObj.deviceModel = model;
                        deviceObj.sensorTypes = sp.types;
                        deviceObj.position = sp.position;
                        hasData = true;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }

                if (hasData) {
                  dataStore.addDeviceModel(model);
                }
              };

              _onItemHovering = function _onItemHovering3() {
                _onItemHovering = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(event) {
                  var currAppState, deviceId, device, position, mappedPosition, vertificalOffset;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          currAppState = appStateRef.current;

                          if (event.hovering && currAppState.dbId2DeviceIdMap) {
                            deviceId = currAppState.dbId2DeviceIdMap[event.dbId];
                            device = currAppState.session.dataStore.getDevice(deviceId);

                            if (device) {
                              position = device.position;
                              mappedPosition = currAppState.viewer.impl.worldToClient(position); // Accounting for vertical offset of viewer container.

                              vertificalOffset = event.originalEvent.clientY - event.originalEvent.offsetY;
                              setHoveredDeviceInfo({
                                id: deviceId,
                                xcoord: mappedPosition.x,
                                ycoord: mappedPosition.y + vertificalOffset - SpriteSize / viewer.getWindow().devicePixelRatio
                              });
                            }
                          } else {
                            if (hoveredDeviceInfoRef.current && hoveredDeviceInfoRef.current.id != null) {
                              setHoveredDeviceInfo({});
                            }
                          }

                        case 2:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));
                return _onItemHovering.apply(this, arguments);
              };

              onItemHovering = function _onItemHovering2(_x7) {
                return _onItemHovering.apply(this, arguments);
              };

              onItemClick = function _onItemClick(event) {
                var currAppState = appStateRef.current;

                if (currAppState.dataVizExtn && currAppState.dbId2DeviceIdMap) {
                  setSelectedDevice(currAppState.dbId2DeviceIdMap[event.dbId]);
                }
              };

              processEvent = function _processEvent(callback) {
                return function (event) {
                  props.eventBus.dispatchEvent(event);
                  if (event.hasStopped) return;
                  callback(event);
                };
              };

              _generateViewables = function _generateViewables3() {
                _generateViewables = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(shadingData) {
                  var dbId, dbId2DeviceIdMap, deviceId2DbIdMap, viewableData, i, leaf, j, device, style, position, viewable, propertyMap, defaultHeatmapOptions, gradientSettings, deviceType, state;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          dbId = 1;
                          dbId2DeviceIdMap = {};
                          deviceId2DbIdMap = {};
                          viewableData = new DataVizCore.ViewableData();
                          viewableData.spriteSize = props.surfaceShadingConfig && props.surfaceShadingConfig.spriteSize ? props.surfaceShadingConfig.spriteSize : SpriteSize;

                          for (i = 0; i < leafNodes.length; i++) {
                            leaf = leafNodes[i];

                            for (j = 0; leaf.shadingPoints && j < leaf.shadingPoints.length; j++) {
                              device = leaf.shadingPoints[j];
                              style = getViewableStyle(device.contextData.styleId);
                              position = device.position;
                              viewable = new DataVizCore.SpriteViewable(position, style, dbId);
                              dbId2DeviceIdMap[dbId] = device.id;
                              deviceId2DbIdMap[device.id] = dbId;
                              dbId++;
                              viewableData.addViewable(viewable);
                            }
                          }

                          _context6.next = 8;
                          return viewableData.finish();

                        case 8:
                          dataVizExtn.addViewables(viewableData);
                          dataVizExtn.showHideViewables(renderSettings.showViewables, renderSettings.occlusion);

                          if (!renderSettings.showTextures) {
                            dataVizExtn.hideTextures();
                          }

                          propertyMap = session.dataStore.getPropertiesFromDataStore();
                          defaultHeatmapOptions = Object.assign({}, heatmapOptions, {
                            selectedPropertyId: Array.from(propertyMap.keys())[0] || ""
                          });
                          setHeatmapOptions(defaultHeatmapOptions);

                          if (props.surfaceShadingConfig && props.surfaceShadingConfig.gradientSetting) {
                            gradientSettings = props.surfaceShadingConfig.gradientSetting;

                            for (deviceType in gradientSettings) {
                              dataVizExtn.registerSurfaceShadingColors(deviceType, gradientSettings[deviceType], 0.7);
                            }
                          }

                          state = Object.assign({}, appState, {
                            viewer: viewer,
                            dataVizExtn: dataVizExtn,
                            session: session,
                            masterDataView: masterDataView,
                            deviceId2DbIdMap: deviceId2DbIdMap,
                            dbId2DeviceIdMap: dbId2DeviceIdMap,
                            propertyMap: propertyMap,
                            shadingData: shadingData,
                            model: model
                          });
                          setAppState(state);

                        case 17:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));
                return _generateViewables.apply(this, arguments);
              };

              generateViewables = function _generateViewables2(_x6) {
                return _generateViewables.apply(this, arguments);
              };

              getViewableStyle = function _getViewableStyle(styleId) {
                return styleMap[styleId] || styleMap["default"];
              };

              highlightOnMouseOver = function _highlightOnMouseOver(event, isHighlight) {
                var node = shadingData.getNodeById(event.data.id);

                if (node && node.dbIds) {
                  node.dbIds.map(function (dbId) {
                    return viewer.impl.highlightObjectNode(model, dbId, isHighlight);
                  });
                  viewer.impl.invalidate(false, false, true);
                } else {
                  for (var i = 0; i < leafNodes.length; i++) {
                    var leaf = leafNodes[i];

                    if (leaf.shadingPoints && leaf.shadingPoints.find(function (item) {
                      return item.id == event.data.id;
                    })) {
                      var sp = leaf.shadingPoints.find(function (item) {
                        return item.id == event.data.id;
                      });

                      if (sp.dbId != null) {
                        viewer.impl.highlightObjectNode(model, sp.dbId, isHighlight);
                      } else {
                        leaf.dbIds.map(function (dbId) {
                          return viewer.impl.highlightObjectNode(model, dbId, isHighlight);
                        });
                      }

                      viewer.impl.invalidate(false, false, true);
                      break;
                    }
                  }
                }

                event.originalEvent.stopPropagation();
              };

              handleTreeNodeClick = function _handleTreeNodeClick(event) {
                var currentSelectedNode = selectedGroupNodeRef.current;

                if (currentSelectedNode && currentSelectedNode.id == event.data.id) {
                  setSelectedGroupNode(null);
                  selectedGroupNodeRef.current = null;
                } else {
                  var selectedNode = shadingData.getNodeById(event.data.id);

                  if (selectedNode) {
                    setSelectedGroupNode(selectedNode);
                    selectedGroupNodeRef.current = selectedNode;
                  }
                }
              };

              session = appState.session, masterDataView = appState.masterDataView, viewer = appState.viewer, model = appState.model, dataVizExtn = appState.dataVizExtn;
              DataVizCore = Autodesk.DataVisualization.Core;
              styleMap = initialDeviceModelStyleMap(props.surfaceShadingConfig); // let shadingData = await mapDevicesToRooms(session, model);

              _props$data = props.data, shadingData = _props$data.shadingData, devicePanelData = _props$data.devicePanelData;
              shadingData.initialize(model);
              leafNodes = [];
              shadingData.getChildLeafs(leafNodes);
              props.eventBus.addEventListener(EventTypes.DEVICE_TREE_EXPAND_EVENT, handleTreeNodeClick);
              props.eventBus.addEventListener(EventTypes.GROUP_SELECTION_MOUSE_CLICK, handleTreeNodeClick);
              props.eventBus.addEventListener(EventTypes.GROUP_SELECTION_MOUSE_OUT, function (event) {
                highlightOnMouseOver(event, false);
              });
              props.eventBus.addEventListener(EventTypes.GROUP_SELECTION_MOUSE_OVER, function (event) {
                highlightOnMouseOver(event, true);
              });
              /**
               * Gets the ViewableStyle object for the given device model.
               *
               * @param {string} styleId Identifier of the device model.
               *
               * @returns {ViewableStyle} The corresponding
               * ViewableStyle object for the given device model, or the default style if none is found matching.
               *
               */

              _context9.next = 25;
              return Promise.all([dataVizExtn.setupSurfaceShading(model, shadingData, {
                type: renderSettings.heatmapType
              }), generateViewables(shadingData)]);

            case 25:
              updateDataStore();
              completeDeviceTree = devicePanelData;
              setDeviceTree(completeDeviceTree);
              itemClickListener = processEvent(onItemClick);
              itemHoverListener = processEvent(onItemHovering);
              viewer.addEventListener(DataVizCore.MOUSE_CLICK, itemClickListener);
              viewer.addEventListener(DataVizCore.MOUSE_HOVERING, itemHoverListener);
              activeListenersRef.current[DataVizCore.MOUSE_CLICK] = itemClickListener;
              activeListenersRef.current[DataVizCore.MOUSE_HOVERING] = itemHoverListener; //Initialize websocket

              /**
               *
               * @param {Session} session {@link Session} object
               * initialized from the {@link BaseApp#initializeDataStore}
               * @private
               */

              createWebsocket(session);
              props.eventBus.dispatchEvent({
                type: EventTypes.VIEWABLES_LOADED,
                data: {
                  dataVizExtn: dataVizExtn,
                  DataVizCore: DataVizCore
                }
              });

            case 36:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return _onDataReady.apply(this, arguments);
  }

  function onViewerInitialized(viewer) {
    if (lmvViewerRef.current) {
      throw new Error("Viewer has been recreated");
    }

    lmvViewerRef.current = viewer;
  }

  var triggerDataRefresh = function () {
    var lastTime = new Date();
    var pendingOptions = null; // If the event was fired less than 16 ms, (or more than 60hz)
    // React UI will slow down and some event will be put into yeild mode
    // Control the frequency of the events will improve the performance a lot

    function updateTimeOptions(options) {
      var currentTime = new Date();

      if (currentTime - lastTime > 16) {
        lastTime = currentTime;
        needRefreshHeatmapRef.current = true;
        setTimeOptions(options);
      } else {
        pendingOptions = options;
        setTimeout(function () {
          updateTimeOptions(pendingOptions);
        }, 10);
      }
    }

    return updateTimeOptions;
  }();
  /**
   * Handles changes on the time slider. The start date and/or end date can
   * be modified by user inputs interactively. This function will be called
   * when such changes happen.
   * @param {Date} startTime The start time for device data fetch call
   * @param {Date} endTime The end time for device data fetch call
   * @param {Date} currentTime The current time at which the TimeMarker is
   * @alias Autodesk.DataVisualization.UI.BaseApp.#handleTimeRangeUpdated
   */


  function handleTimeRangeUpdated(startTime, endTime, currentTime) {
    var currAppState = appStateRef.current;

    if (currAppState && currAppState.masterDataView) {
      setTimeWindow(startTime, endTime, currAppState.masterDataView); // Update component time option state.

      var options = Object.assign({}, timeOptionRef.current);
      options.startTime = startTime;
      options.endTime = endTime;
      options.currentTime = currentTime ? currentTime : startTime;
      triggerDataRefresh(options);
    }
  }
  /**
   * Handles changes of the time slider's time marker. The time marker can be
   * changed interactively by the user when it is dragged within the time window,
   * or during a playback mode of the time slider.
   * @param {Date} currentTime The current time at which the time marker is.
   * @alias Autodesk.DataVisualization.UI.BaseApp.#handleCurrTimeUpdated
   */


  function handleCurrTimeUpdated(currentTime) {
    var options = Object.assign({}, timeOptionRef.current);
    options.currentTime = currentTime;
    triggerDataRefresh(options);
  }
  /**
   * Called when a device has been selected. Uses the Data Visualization Extension to highlight node.
   *
   * @param {MouseEvent} event Click event indicating that a row in {@link DeviceTree} has been selected.
   * @param {string} node Device identifier
   * @private
   */


  function onNodeSelected(_x3, _x4) {
    return _onNodeSelected.apply(this, arguments);
  }
  /**
   * Clears selected device from the scene and from the {@link DevicePanel}.
   * @private
   */


  function _onNodeSelected() {
    _onNodeSelected = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(event, node) {
      var deviceId;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              /** @type {string} */
              deviceId = node; // Only attempt select if device IDs have been established.

              if (appState.deviceId2DbIdMap && appState.deviceId2DbIdMap[deviceId]) {
                appState.dataVizExtn.highlightViewables([appState.deviceId2DbIdMap[deviceId]]);
                setSelectedDevice(deviceId);
              } else {
                setSelectedDevice("");
              }

            case 2:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    return _onNodeSelected.apply(this, arguments);
  }

  function navigateBackToDevices() {
    setSelectedDevice("");
    appState.dataVizExtn.clearHighlightedViewables();
  }
  /**
   * Gets the device property value given the current time marker.
   *
   * @param {SurfaceShadingPoint} surfaceShadingPoint A point that
   * &nbsp;contributes to the heatmap generally generated from a {@link Device} object.
   * &nbsp;This is generally created from a call to {@link ModelSurfaceInfo#generateSurfaceShadingData}
   * @param {string} sensorType The device property for which normalized
   * &nbsp;property value is to be retrieved.
   * @returns {number} The property value of the device at the time given in
   * &nbsp;timeOptions.currentTime field.
   * @alias Autodesk.DataVisualization.UI.BaseApp#getSensorValue
   * @private
   */


  function getSensorValue(surfaceShadingPoint, sensorType) {
    var currAppState = appStateRef.current;
    var options = timeOptionRef.current;

    if (currAppState && options) {
      var deviceId = surfaceShadingPoint.id;
      /** @type {DataView} */

      var dataView = currAppState.masterDataView;
      /** @type {Map.<string, DeviceProperty>} */

      var properties = currAppState.propertyMap; // Get the aggregated value for the selected property.

      var prop = properties.get(sensorType);

      if (prop) {
        var ct = getTimeInEpochSeconds(options.currentTime);
        var av = dataView.getAggregatedValues(deviceId, prop.id);

        if (av) {
          // Given the current time, find the closest from time stamp array.
          var value = getClosestValue(av, ct); // Compute the normalized sensor value from the data range.

          var range = av.getDataRange("avgValues");
          var normalized = (value - range.min) / (range.max - range.min);
          normalized = clamp(normalized, 0, 1);
          return normalized;
        }
      }
    }

    return 0;
  }
  /**
   * Uses the application based on user changes to the {@link HeatmapOptions} component.
   *
   * @param {Object} options Settings defined in the {@link HeatmapOptions}.
   * @private
   */


  function onHeatmapOptionChange(options) {
    setHeatmapOptions(options);
    var currAppState = appStateRef.current; // Update timeOptions with new resolution value if applicable.

    if (options.resolutionValue != timeOptionRef.current.resolutionValue) {
      var newTimeOptions = Object.assign({}, timeOptionRef.current);
      newTimeOptions.resolution = options.resolutionValue;
      setTimeWindow(newTimeOptions.startTime, newTimeOptions.endTime, currAppState.masterDataView, newTimeOptions.resolution);
      setTimeOptions(newTimeOptions);
    }

    if (selectedGroupNode && currAppState) {
      var dataVizExtn = currAppState.dataVizExtn;

      if (options.showHeatMap) {
        var selectedProperty = options.selectedPropertyId;
        dataVizExtn.renderSurfaceShading(selectedGroupNode.id, selectedProperty, getSensorValue);
      } else {
        dataVizExtn.removeSurfaceShading();
      }
    }
  }
  /**
   * Called when a user has changed the selected group in the scene using the {@link HyperionToolContainer}
   * or the {@link DeviceTree}
   *
   * @private
   */


  function checkGroupChange() {
    var currAppState = appStateRef.current;
    var dataVizExtn = currAppState.dataVizExtn; // A different group has been selected.

    if (selectedGroupNode && selectedGroupNode.id != currentSurfaceShadingGroupRef.current && currAppState && dataVizExtn) {
      currentSurfaceShadingGroupRef.current = selectedGroupNode.id;
      dataVizExtn.removeSurfaceShading(); // Set resolution back to 1 hour.

      if (timeOptionRef.current.resolution != "PT1H") {
        var newHeatmapOptions = heatmapOptions;
        newHeatmapOptions.resolutionValue = "PT1H";
        setHeatmapOptions(newHeatmapOptions);
        var newTimeOptions = Object.assign({}, timeOptionRef.current);
        newTimeOptions.resolution = "PT1H";
        setTimeWindow(newTimeOptions.startTime, newTimeOptions.endTime, currAppState.masterDataView, newTimeOptions.resolution);
        setTimeOptions(newTimeOptions);
      }

      if (heatmapOptions.showHeatMap) {
        var selectedProperty = heatmapOptions.selectedPropertyId;
        dataVizExtn.renderSurfaceShading(selectedGroupNode.id, selectedProperty, getSensorValue);
      }
    } else if (selectedGroupNode == null && dataVizExtn) {
      dataVizExtn.removeSurfaceShading();
      currentSurfaceShadingGroupRef.current = null;
    }
  }

  useEffect(function () {
    if (!selectedGroupNode && appStateRef.current.propertyMap && props.data.shadingData) {
      if (props.data.shadingData.children.length > 0) {
        dispatchEventToHandler({
          type: EventTypes.GROUP_SELECTION_MOUSE_CLICK,
          data: props.data.shadingData.children[0]
        });
      }
    }
  }, [appStateRef.current.propertyMap]);
  /**
   * Gets the selected property's range min, max and dataUnit value.
   *
   * @param {string} propertyId String identifier of a device property.
   * @returns {Object} The rangeMin, rangeMax and dataUnit for the selected propertyId
   * @private
   */

  function getPropertyRanges(propertyId) {
    var currAppState = appStateRef.current;

    if (propertyId !== "None") {
      var dataUnit = "";
      var rangeMin = Infinity;
      var rangeMax = -Infinity;
      /** @type {Map.<string,DeviceProperty>} */

      var propertyMap = currAppState.propertyMap; //Get the property data from the device model

      var deviceProperty = propertyMap.get(propertyId);

      if (deviceProperty) {
        dataUnit = deviceProperty.dataUnit;
        dataUnit = dataUnit.toLowerCase() === "celsius" ? "°C" : dataUnit;
        dataUnit = dataUnit.toLowerCase() === "fahrenheit" ? "°F" : dataUnit;
        rangeMin = Math.min(rangeMin, deviceProperty.rangeMin); // will be NaN if deviceProperty.rangeMin == undefined or NaN

        rangeMax = Math.max(rangeMax, deviceProperty.rangeMax); // will be NaN if deviceProperty.rangeMax == undefined or NaN
      } // Check if the property min and max range is available in the device model, else notify user


      if (isNaN(rangeMin) || isNaN(rangeMax)) {
        console.warn("RangeMin and RangeMax for ".concat(propertyId, " not specified. Please update these values in the device model"));
        rangeMin = 0;
        rangeMax = 100;
        dataUnit = "%";
      }

      return {
        rangeMin: rangeMin,
        rangeMax: rangeMax,
        dataUnit: dataUnit
      };
    }
  }

  var currAppState = appStateRef.current;

  if (selectedGroupNode && currAppState) {
    var dataVizExtn = currAppState.dataVizExtn;

    if (heatmapOptions.showHeatMap && dataVizExtn && needRefreshHeatmapRef.current) {
      needRefreshHeatmapRef.current = false;
      dataVizExtn.updateSurfaceShading(getSensorValue);
    }
  }
  /**
   * Returns the {@link TreeNode} in deviceTree that matches the given id.
   *
   * @param {string} selectedNodeId group name
   * @private
   */


  function findNode(selectedNodeId) {
    var stack = deviceTree.slice();

    while (stack.length) {
      var item = stack.shift();
      if (item.id == selectedNodeId) return item;
      stack = stack.concat(item.children);
    }
  }
  /**
   * Returns all devices given the name of a group. [] if no devices found.
   *
   * @param {Object} selectedNode Group object
   * @returns {Array.<TreeNode>} All devices (if any) on selectedNode.
   * @private
   */


  function getDevicesInGroup(selectedNode) {
    var deviceTreeFloor = findNode(selectedNode.id);

    function getChildren(accumulator, item) {
      if (!item.children || item.children.length === 0) {
        accumulator.push(item);
        return accumulator;
      }

      item.children.forEach(function (element) {
        getChildren(accumulator, element);
      });
    }

    var devices = [];

    if (deviceTreeFloor) {
      getChildren(devices, deviceTreeFloor);
    }

    return devices;
  }
  /**
   * Given a list of deviceToQuery, checks masterDataView for relevant data. If not found, triggers a fetch and updates currentDeviceData when complete.
   *
   * @param {*} devicesToQuery List of {@link TreeNode} to fetch device data for.
   * @private
   */


  function getDeviceData(devicesToQuery) {
    var currAppState = appStateRef.current;
    /** @type {CurrentDeviceData} */

    var data = {};
    var propertyMap = currAppState.propertyMap;
    devicesToQuery.forEach(function (device) {
      device.propIds.forEach(function (property) {
        var av = currAppState.masterDataView.getAggregatedValues(device.id, property);

        if (av) {
          var options = timeOptionRef.current;
          var ct = getTimeInEpochSeconds(options.currentTime);
          var val = getClosestValue(av, ct);
          Object.assign(data, currentDeviceDataRef.current);

          if (!data[device.id]) {
            data[device.id] = {};
          }

          var deviceProperty = propertyMap.get(property);
          var dataUnit = deviceProperty ? deviceProperty.dataUnit : "%";
          data[device.id][property] = "".concat(val.toFixed(2), " ").concat(dataUnit);
        }
      });
    });
    if (Object.keys(data).length) currentDeviceDataRef.current = data;
  }
  /**
   * Fetches and populates chartData for all devices in devicesToQuery that haven't already been fetched.
   *
   * @param {Array.<TreeNode>} devicesToQuery List of {@link TreeNode} to retrieve chart data for.
   * @private
   */


  function getChartData(devicesToQuery) {
    var currAppState = appStateRef.current;
    /**@type {ChartData} */

    var data = {};
    var propertyMap = currAppState.propertyMap;
    devicesToQuery.forEach(function (device) {
      device.propIds.forEach(function (property) {
        var av = currAppState.masterDataView.getAggregatedValues(device.id, property);

        if (av) {
          var _getPaddedRange = getPaddedRange(av.avgValues, 10.0),
              min = _getPaddedRange.min,
              max = _getPaddedRange.max;

          Object.assign(data, chartDataRef.current);

          if (!data[device.id]) {
            data[device.id] = {
              name: device.name,
              properties: {}
            };
          }

          var seriesData = [];
          av.tsValues.forEach(function (tsValue, index) {
            seriesData.push({
              value: [tsValue * 1000, av.avgValues[index]],
              label: {}
            });
          });
          var deviceProperty = propertyMap.get(property);
          var dataUnit = deviceProperty ? deviceProperty.dataUnit : "%";
          data[device.id]["properties"][property] = {
            dataUnit: dataUnit,
            seriesData: seriesData,
            yAxis: {
              dataMin: min,
              dataMax: max
            }
          };
        }
      });
    });
    if (Object.keys(data).length) chartDataRef.current = data;
  }

  var devicesToQuery = [];

  if (selectedGroupNode && deviceTree.length) {
    devicesToQuery = getDevicesInGroup(selectedGroupNode);
  }

  if (hoveredDeviceInfoRef.current.id && !currentDeviceDataRef.current[hoveredDeviceInfoRef.current.id]) {
    devicesToQuery.push(findNode(hoveredDeviceInfoRef.current.id));
  } else if (selectedGroupNode === null && deviceTree) {
    // Viewing entire model, need to query all devices.
    deviceTree.forEach(function (group) {
      devicesToQuery.push.apply(devicesToQuery, group.children);
    });
  }

  getDeviceData(devicesToQuery);
  getChartData(devicesToQuery);
  /**
   * @private
   *
   * Handle QueryCompleted event originating from the DataView object. Informs
   * this component about the completion of a particular data fetch.
   *
   * @param {QueryCompletedEventArgs} eventArgs The arguments for which
   * the {@link DataView} was queried.
   */

  function handleQueryCompleted(eventArgs) {
    // The following hook causes BaseApp to repaint every time a device
    // fetch is completed. E.g. if the time slider is adjusted, and 10 devices
    // are being queried for their data (in bulk), then the following will
    // trigger 10 renders. This should not be a concern as React will only ever
    // update the relevant DOM sub-tree that actually changes.
    var query = eventArgs.query;
    setDataContext("".concat(query.dateTimeSpan.hashCode, "-").concat(query.deviceId));
  }

  checkGroupChange();
  useEffect(function () {
    if (currAppState.masterDataView) {
      currAppState.masterDataView.addEventListener(EventType.QueryCompleted, handleQueryCompleted);
      return function () {
        currAppState.masterDataView.removeEventListener(EventType.QueryCompleted, handleQueryCompleted);
      };
    }
  }, [currAppState.masterDataView]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "main_header"
  }, /*#__PURE__*/React.createElement(ChronosTimeSlider, _extends({
    rangeStart: startRange.toISOString(),
    rangeEnd: endRange.toISOString()
  }, timeOptions, {
    onTimeRangeUpdated: handleTimeRangeUpdated,
    onCurrTimeUpdated: handleCurrTimeUpdated
  })), /*#__PURE__*/React.createElement(BasicDatePicker, _extends({}, timeOptions, {
    disabledDate: endRange,
    onRangeChange: handleTimeRangeUpdated
  }))), /*#__PURE__*/React.createElement(CustomToolTip, {
    hoveredDeviceInfo: hoveredDeviceInfo,
    chartData: chartDataRef.current,
    currentDeviceData: currentDeviceDataRef.current
  }), /*#__PURE__*/React.createElement("div", {
    className: "viewer-container"
  }, /*#__PURE__*/React.createElement(Viewer, {
    env: env,
    docUrn: docUrn,
    api: api,
    onViewerInitialized: onViewerInitialized,
    onModelLoaded: onModelLoaded,
    getToken: getToken,
    extensions: {
      "Autodesk.Viewing.ZoomWindow": {},
      "Autodesk.DataVisualization": {}
    },
    geomIndex: props.geomIndex
  })), props.data && props.data.devicePanelData && /*#__PURE__*/React.createElement(HyperionToolContainer, {
    eventBus: props.eventBus,
    data: props.data.devicePanelData,
    selectedGroupNode: selectedGroupNode,
    renderSettings: renderSettings
  }), selectedGroupNode && /*#__PURE__*/React.createElement(HeatmapOptions, _extends({}, heatmapOptions, {
    propIdGradientMap: props.surfaceShadingConfig ? props.surfaceShadingConfig.gradientSetting : PropIdGradientMap,
    onHeatmapOptionChange: onHeatmapOptionChange,
    getPropertyRanges: getPropertyRanges,
    deviceModelProperties: appStateRef.current.propertyMap,
    totalMarkers: 4
  })), props.data && props.data.devicePanelData && /*#__PURE__*/React.createElement(DataPanelContainer, _extends({}, appStateRef.current, {
    selectedDevice: selectedDevice,
    selectedPropertyId: heatmapOptions.selectedPropertyId,
    devices: props.data.devicePanelData,
    onNodeSelected: onNodeSelected,
    onNavigateBack: navigateBackToDevices,
    propertyIconMap: props.propertyIconMap ? props.propertyIconMap : PropertyIconMap,
    selectedGroupNode: selectedGroupNode,
    currentDeviceData: currentDeviceDataRef.current,
    chartData: chartDataRef.current,
    eventBus: props.eventBus
  })), /*#__PURE__*/React.createElement("img", {
    className: "logo",
    src: img$5,
    alt: "Autodesk Logo"
  }));
}

/**
 * @returns {React.ReactFragment} The SvgIcon used to for the Selection tool.
 * @private
 */

function SelectionToolIcon() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SvgIcon, {
    viewBox: "0 0 28 27",
    xmlns: "http://www.w3.org/2000/svg",
    id: "sensor-selection-tool-icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.0580799999999986,11.03a9.38732,9.38732 0 1,0 18.77464,0a9.38732,9.38732 0 1,0 -18.77464,0",
    fill: "inherit"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18.4859",
    cy: "18.0704",
    r: "6.60504",
    fill: "#373737"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11.5571",
    cy: "11.1418",
    r: "6.93452",
    fill: "#545151"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M25.5264 17.2881H20.8327V12.5945H17.7036V17.2881H13.0099V20.4172H17.7036V25.1109H20.8327V20.4172H25.5264V17.2881Z",
    fill: "inherit"
  })));
}
/**
 * @returns {React.ReactFragment} The SvgIcon used to for the Selection tool in AddPointsBar.
 * @private
 */


function SelectionToolIconInDone() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SvgIcon, {
    viewBox: "0 0 55 55",
    xmlns: "http://www.w3.org/2000/svg",
    id: "sensor-selection-tool-icon-in-bar"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "23.1371",
    cy: "22.2973",
    r: "19.0442",
    fill: "#007FC6",
    stroke: "white",
    strokeWidth: "6.34806"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "37.4203",
    cy: "36.5805",
    r: "17.4572",
    fill: "#007FC6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "23.3635",
    cy: "22.524",
    r: "16.0969",
    fill: "#007FC6"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M51.7033 34.9934H42.1812V25.4713H35.8331V34.9934H26.311V41.3415H35.8331V50.8635H42.1812V41.3415H51.7033V34.9934Z",
    fill: "white"
  })));
}
/**
 * @returns {React.ReactFragment} The SvgIcon used to for the closing the DeviceListContainer
 * @private
 */


function CancelIcon() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SvgIcon, {
    viewBox: "0 0 31 31",
    xmlns: "http://www.w3.org/2000/svg",
    id: "closeIcon",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "15.5",
    cy: "15.5",
    r: "15",
    fill: "#2A2A2A",
    stroke: "white"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.4001 9.4001L22.6001 8.6001L16.0001 15.3001L9.4001 8.6001L8.6001 9.4001L15.3001 16.0001L8.6001 22.6001L9.4001 23.4001L16.0001 16.7001L22.6001 23.4001L23.4001 22.6001L16.7001 16.0001L23.4001 9.4001Z",
    fill: "white"
  })));
}
/**
 * A Dialog bar to indicate collection mode is 'ON'. Allows user to turn if off when they are done with their selction.
 * @component
 * @param {Object} props
 * @param {OnMouseEvent} props.onDone A function invoked when 'Done Button' is clicked.
 * @private
 */


function AddPointsBar(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "selectionDoneBar"
  }, /*#__PURE__*/React.createElement("div", {
    id: "AddPointsTextContainer"
  }, /*#__PURE__*/React.createElement(SelectionToolIconInDone, null), /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    id: "AddPointsTypography"
  }, "\xA0 Select the model to add points.")), /*#__PURE__*/React.createElement("div", {
    id: "doneButtonDiv"
  }, /*#__PURE__*/React.createElement(Button, {
    id: "doneButton",
    size: "small",
    onClick: props.onDone
  }, "Done")));
}
/**
 * A Device List container component that displays the list of all the sensorPoint objects on Viewer canvas.
 * @component
 * @param {Object} props Props for DeviceListContainer component
 * @param {Map<string,RoomDevice>} props.deviceListMap A Map of all the selected points
 * @return {JSX.Element} Contains a generated list of all the selected object that defines the structure of a Device in a Room.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.SelectionTool.DeviceListContainer
 */


function DeviceListContainer(props) {
  var deviceMap = props.deviceListMap;

  var deviceList = _toConsumableArray(deviceMap.values());

  return /*#__PURE__*/React.createElement(Draggable, null, /*#__PURE__*/React.createElement("div", {
    id: "showAllDiv"
  }, deviceList.length > 0 ? /*#__PURE__*/React.createElement("div", {
    id: "listDiv"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body1"
  }, "Selection List ="), /*#__PURE__*/React.createElement(Controlled, {
    value: JSON.stringify(deviceList, undefined, 2),
    options: {
      mode: "javascript",
      lineNumbers: false,
      json: true,
      theme: "material-darker",
      tabSize: 2,
      readOnly: true
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "CopyButtonDiv"
  }, /*#__PURE__*/React.createElement(CopyToClipboard, {
    text: JSON.stringify(deviceList, undefined, 2)
  }, /*#__PURE__*/React.createElement(Button, {
    id: "Copybutton",
    size: "small"
  }, "Copy")))) : "No Points in Selection List", /*#__PURE__*/React.createElement(IconButton, {
    id: "closeIconButton",
    onClick: props.handleClose
  }, /*#__PURE__*/React.createElement(CancelIcon, null))));
}
/**
 * A Selection Tool component responsible for displaying selection tool options
 * &nbsp;that allows user to click-and-add viewables to the loaded model in Viewer canvas
 * &nbsp; and get a list that represents the selected points as {@link RoomDevice} objects.
 * @component
 *
 * @param {Object} props
 * @param {Autodesk.Viewing.GuiViewer3D} viewer Instance of Forge Viewer
 * @param {Function} props.updateDevices A function to update the deviceList of parent component.
 *
 * @memberof Autodesk.DataVisualization.UI
 * @alias Autodesk.DataVisualization.UI.SelectionTool
 */


function SelectionTool(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectionButtonAnchor = _useState2[0],
      setSelectionButtonAnchor = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectionArrowRef = _useState4[0],
      setSelectionArrowRef = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showDoneBar = _useState6[0],
      setShowDoneBar = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showList = _useState8[0],
      setShowList = _useState8[1];

  var collectionModeRef = useRef("OFF");
  var dbIdNameMapRef = useRef(new Map());
  var selectedPointsMapRef = useRef(new Map());
  var viewer = props.viewer;
  var DATAVIZEXTN = Autodesk.DataVisualization.Core;
  useEffect(function () {
    viewer.addEventListener(DATAVIZEXTN.MOUSE_CLICK, onClickSelection);
    return function cleanUp() {
      if (viewer) {
        viewer.removeEventListener(DATAVIZEXTN.MOUSE_CLICK, onClickSelection);
      }
    };
  }, []);
  /**
   * Handle Selection Tool Container click
   * @param {MouseEvent} event Click event indicating that the user has clicked on Selection Tool Icon.
   * @private
   */

  var handleButtonClick = function handleButtonClick(event) {
    setSelectionButtonAnchor(event.currentTarget);
  };
  /**
   * Closes the selection tool menu,
   *
   * @param {MouseEvent} event Click event indicating that the user has clicked elsewhere in the scene.
   * @private
   */


  var handleClickAway = function
    /* event */
  handleClickAway() {
    setSelectionButtonAnchor(null);
  };
  /**
   * Handle click event indicating that the user has selected 'Add Points' in Selection tool menu
   * Turns on the collection mode
   * @private
   */


  function handleAddPoints() {
    //Start collecting the selected point on the Viewer canvas.
    collectionModeRef.current = "ON";
    setShowDoneBar(true);
  }
  /**
   * Handle click event indicating that the user has selected 'Show All points' in Selection tool menu to
   * display the Selection List container.
   * @private
   */


  function handleShowClick() {
    setShowList(true);
  }
  /**
   * Handle click event indicating that the user has selected 'Clear All' in Selection tool menu to
   * clear the viewables and selection list.
   * @private
   */


  function handleClearAll() {
    // Clear the selectedPoint Map
    selectedPointsMapRef.current.clear();
    dbIdNameMapRef.current.clear();
    props.updateDevices([]);
  }
  /**
   * Handle click event indicating that the user has selected 'Done' in Add Points Bar to
   * stop the Collection Mode
   * @private
   */


  function handleDone() {
    collectionModeRef.current = "OFF";
    setShowDoneBar(false);
  }
  /**
   * Handle click event to close the Selection List container
   * @private
   */


  function handleClose() {
    setShowList(false);
  }
  /**
   * Function to extract the properties of a selected point from the Viewer.
   * @param {number} dbId The DbID of the selected point.
   * @returns {Promise} A promise that resolves to the name property of the selected point.
   */


  function getPropertiesFromDbId(dbId) {
    return new Promise(function (resolve, reject) {
      viewer.getProperties(dbId, function (e) {
        var name = e.name;
        resolve(name);
      }, function (error) {
        reject(error);
      });
    });
  }
  /**
   * Handles the 'MOUSE_CLICK' event.
   * Generates a JSON object representing a {@link RoomDevice} based on the selected point on the Viewer canvas.
   * @param {MouseEvent} event Click event indicating that the user has selected a point on the loaded model.
   * @param {Object} event.clickInfo The selection point which is passed through the event
   * @param {number} event.clickInfo.dbId The dbId of the selection point
   * @param {{x:number, y:number, z:number}} event.clickInfo.point The position information of the selection point
   */


  function onClickSelection(_x) {
    return _onClickSelection.apply(this, arguments);
  }

  function _onClickSelection() {
    _onClickSelection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var sp, spId, dbProp, name, sensorPoint, key;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(collectionModeRef.current == "ON")) {
                _context.next = 18;
                break;
              }

              if (!(event.dbId == 0)) {
                _context.next = 18;
                break;
              }

              // User clicked an area with no sprites
              sp = event.clickInfo; //Generate an id for the sensorPoint.

              if (!dbIdNameMapRef.current.has(sp.dbId)) {
                _context.next = 9;
                break;
              }

              dbProp = dbIdNameMapRef.current.get(sp.dbId);
              dbProp.index++;
              spId = dbProp.name + "-" + dbProp.index;
              _context.next = 14;
              break;

            case 9:
              _context.next = 11;
              return getPropertiesFromDbId(sp.dbId);

            case 11:
              name = _context.sent;
              dbIdNameMapRef.current.set(sp.dbId, {
                name: name,
                index: 1
              });
              spId = name + "-1";

            case 14:
              /** @type {RoomDevice} An object that defines the structure of a Device in a Room. */
              sensorPoint = {
                id: spId,
                dbId: sp.dbId,
                position: sp.point,
                type: "my-sensor-type",
                sensorTypes: ["Temperature"]
              };
              key = "".concat(sensorPoint.position.x.toFixed(2), "-").concat(sensorPoint.position.y.toFixed(2), "-").concat(sensorPoint.position.z.toFixed(2));
              /**
               * @type {Map<String,RoomDevice>}
               */

              selectedPointsMapRef.current.set(key, sensorPoint);
              /**
               * @type {Array.<RoomDevice>}
               */

              props.updateDevices(_toConsumableArray(selectedPointsMapRef.current.values()));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onClickSelection.apply(this, arguments);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "selectionToolContainer"
  }, /*#__PURE__*/React.createElement(IconButton, {
    className: "container-button",
    onClick: handleButtonClick
  }, /*#__PURE__*/React.createElement(SelectionToolIcon, null)), /*#__PURE__*/React.createElement(Popper, {
    className: "popper",
    open: Boolean(selectionButtonAnchor),
    anchorEl: selectionButtonAnchor,
    placement: "left-start",
    disablePortal: false,
    modifiers: {
      flip: {
        enabled: true
      },
      preventOverflow: {
        enabled: true,
        boundariesElement: "scrollParent"
      },
      arrow: {
        enabled: true,
        element: selectionArrowRef
      }
    }
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "arrow",
    ref: setSelectionArrowRef
  }), /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleClickAway
  }, /*#__PURE__*/React.createElement(Typography, {
    id: "settings-typography",
    component: "div"
  }, /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    onClick: handleAddPoints
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Add Points"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    onClick: handleShowClick
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Show Point List"
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    onClick: handleClearAll
  }, /*#__PURE__*/React.createElement(ListItemText, {
    primary: "Clear All"
  }))))))), showDoneBar ? /*#__PURE__*/React.createElement(AddPointsBar, {
    onDone: handleDone
  }) : "", showList ? /*#__PURE__*/React.createElement(DeviceListContainer, {
    deviceListMap: selectedPointsMapRef.current,
    handleClose: handleClose
  }) : null);
}

export { BaseApp, BasicDatePicker, BasicTree, ChronosTimeSlider, CustomToolTip, Dashboard, DataChart, DataPanelContainer, DevicePanel, DeviceStats, DeviceTree, EventTypes, HeatmapOptions, HyperionToolContainer, SelectionTool, Viewer };

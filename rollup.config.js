import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import includePaths from 'rollup-plugin-includepaths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import pkg from './package.json';
import image from '@rollup/plugin-image';

const outputs = [
  // {
  //   file: process.env.REACT_APP_PKG_MAIN || pkg.main,
  //   format: 'umd',
  // },
  {
    file: process.env.REACT_APP_PKG_MODULE || pkg.module,
    format: 'es',
  },
];

const postcssPlugins = [
  postcssPresetEnv({
    browsers: pkg.browserslist.production,
    stage: 3,
  }),
  autoprefixer(),
];

const config = outputs.map(({file, format}) => ({
  input: ['client/app.js','scss/components.scss'],
  output: [{
    dir: 'lib',
    format,
    name: 'app',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    exports: 'named',
  }],
  plugins: [
    peerDepsExternal(),
    includePaths({
      include: {},
      paths: ['src'],
      external: Object.keys(pkg.dependencies),
      extensions: ['.jsx', '.js', '.json', '.html'],
    }),
    postcss({
      extract: process.env.REACT_APP_PKG_STYLE || pkg.style,
      inline: false,
      plugins: postcssPlugins,
      syntax: 'postcss-scss'
    }),
    image(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      configFile: './babel.config.rollup.js',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    filesize(),
  ],
}));

export default config;

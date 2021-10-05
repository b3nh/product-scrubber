/* eslint-disable global-require */
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import sveltePreprocess from 'svelte-preprocess';

export default {

  input: './src/index.tsx',
  output: {
    file: './dist/index.js',
    format: 'cjs',
    banner: "require('./css/style.css');",
  },
  plugins: [
    sveltePreprocess({
      scss: {
        includePaths: ['./src'],
      },
      postcss: {
        plugins: [require('autoprefixer')],
      },
    }),
    scss({
      outputStyle: 'compressed',
      include: ['/**/*.css', '/**/*.scss'],
      output: './dist/css/style.css',
      failOnError: true,
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    typescript(),
    commonjs({ extensions: ['.js', '.tsx'] }),
    external(),
    resolve(),
    terser(),
  ],
};

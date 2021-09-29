import babel from 'rollup-plugin-babel';
import resolve  from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import { minify } from 'uglify-es';
import vue from 'rollup-plugin-vue';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

export default {

    input: './src/main.js',
  
    output: {
      file: './build/bundle.js',
      format: 'es',
    //   sourcemap: true
    },

    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        vue({
            css: false,
          }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
          }),
        replace({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            preventAssignment: true
          }),
          (process.env.NODE_ENV === 'production' && terser({}, minify)),
          image(),
          postcss()
      ],
  
  }
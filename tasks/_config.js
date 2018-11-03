export default {
  styles: {
    src: 'src/scss/app.scss',
    dest: 'dist/css/',
    output: 'styles',
    watch: ['src/scss/**/*'],
    search: [
      'src/scss/',
      'node_modules/'
    ],
    vendors: []
  },

  scripts: {
    src: 'src/js/app.js',
    dest: 'dist/js/',
    output: 'scripts',
    watch: ['src/js/**/*'],
    search: [
      'src/js/',
      'node_modules/'
    ],
    vendors: [
      'node_modules/svgxuse/svgxuse.js',
      'node_modules/svgxuse/svgxuse.min.js'
    ]
  },

  img: {
    src: 'src/img/**/*',
    dest: 'dist/img/'
  },

  svg: {
    src: 'src/svg/**/*.svg',
    dest: 'dist/svg/'
  },

  symbols: {
    src: 'dist/icons/**/*.svg',
    dest: 'dist/svg/',
    output: 'symbols.svg',
    options: {
      id: 'icon-%f',
      svgAttrs: { class: 'svg-symbols' },
      templates: ['default-svg']
    }
  },

  feather: {
    src: 'node_modules/feather-icons/dist/icons/',
    dest: 'dist/icons/'
  }
}

/**
 * -----------------------------------------------------
 * NOTES ON CONFIGURATION STRUCTURE
 * -----------------------------------------------------
 *
 * Out of the box, ESLint does not support TypeScript or HTML. Naturally those are the two
 * main file types we care about in Angular projects, so we have to do a little extra work
 * to configure ESLint exactly how we need to.
 *
 * Fortunately, ESLint gives us an "overrides" configuration option which allows us to set
 * different lint tooling (parser, plugins, rules etc) for different file types, which is
 * critical because our .ts files require a different parser and different rules to our
 * .html (and our inline Component) templates.
 */

module.exports = {
  root: true,
  overrides: [
    /**
     * -----------------------------------------------------
     * TYPESCRIPT FILES (COMPONENTS, SERVICES ETC) (.ts)
     * -----------------------------------------------------
     */
    {
      files: ['*.ts'],

      env: {
        browser: true,
        node: true,
      },
      globals: {
        gapi: 'readonly',
        facebook: 'readonly',
        google: 'readonly',
      },

      extends: [
        'plugin:@angular-eslint/recommended',
        // AirBnB Styleguide rules
        'airbnb-typescript/base',
        'plugin:unicorn/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // project: ['tsconfig.*?.json', 'e2e/tsconfig.json'],
        project: ['tsconfig.app.json'],
        createDefaultProgram: true,
      },
      plugins: ['simple-import-sort'],
      rules: {
        /**
         * Any TypeScript related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         *
         * There are some examples below from the @angular-eslint plugin and ESLint core:
         */
        '@angular-eslint/component-class-suffix': 'error',
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'app', style: 'kebab-case' },
        ],
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'app', style: 'camelCase' },
        ],
        '@angular-eslint/no-conflicting-lifecycle': ['error'],
        '@angular-eslint/no-host-metadata-property': ['error'],
        '@angular-eslint/no-input-rename': ['error'],
        '@angular-eslint/no-inputs-metadata-property': ['error'],
        '@angular-eslint/no-output-native': ['off'],
        '@angular-eslint/no-output-on-prefix': ['off'],
        '@angular-eslint/no-output-rename': ['error'],
        '@angular-eslint/no-outputs-metadata-property': ['error'],
        // '@angular-eslint/template/banana-in-box': ['error'],
        // '@angular-eslint/template/no-negated-async': ['error'],
        '@angular-eslint/use-lifecycle-interface': ['error'],
        '@angular-eslint/use-pipe-transform-interface': ['error'],
        '@angular-eslint/no-empty-lifecycle-method':['warn'],

        'import/no-unresolved': ['off'],
        'import/prefer-default-export': ['off'],
        'class-methods-use-this': ['off'],
        'no-underscore-dangle': ['off'],
        'no-param-reassign': ['off'],
        'max-classes-per-file': ['off'],
        'no-plusplus': ['off'],
        'default-case': ['off'],
        'unicorn/prevent-abbreviations': ['off'],
        'unicorn/no-null': ['off'],
        'unicorn/consistent-function-scoping': ['off'],
        'unicorn/filename-case': [
          'error',
          {
            case: 'kebabCase',
            ignore: [
              '--d.component\\.ts$',
              '--t.component\\.ts$',
              '--m.component\\.ts$',
            ],
          },
        ],
        'no-shadow': ['off'],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/lines-between-class-members': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-inferrable-types': ['off'],
        '@typescript-eslint/no-explicit-any': ['warn'],
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
        '@typescript-eslint/typedef': [
          'error',
          {
            arrowParameter: false,
            //   variableDeclaration: true,
            //   variableDeclarationIgnoreFunction: true,
          },
        ],
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
            readonly: 'generic',
          },
        ],
        '@typescript-eslint/member-ordering': ['error'],
        'sort-imports': ['off'],
        'import/order': ['off'],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],

              // Angular
              ['^@angular/'],

              // Packages.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ['^@?\\w'],

              // Absolute imports and other imports such as Vue-style `@/foo`.
              // Anything that does not start with a dot.
              ['^[^.]'],

              // Enviroment
              ['^@app-env/'],

              // Relative imports.
              // Anything that starts with a dot.
              ['^@app/', '^@app-modules-lazy/', '^@app-shared/', '^@app-core/', '^@app-interfaces/', '^@app-enums/', '^@app-common/', '^\\.'],
            ],
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            prefix: ['T'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            prefix: ['I'],
          },
        ],
      },
    },

    /**
     * -----------------------------------------------------
     * COMPONENT TEMPLATES
     * -----------------------------------------------------
     *
     * If you use inline templates, make sure you read the notes on the configuration
     * object after this one to understand how they relate to this configuration directly
     * below.
     */
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
      rules: {
        '@angular-eslint/template/banana-in-box': ['error'],
        '@angular-eslint/template/no-negated-async': ['error'],
      }
    },

    /**
     * -----------------------------------------------------
     * EXTRACT INLINE TEMPLATES (from within .component.ts)
     * -----------------------------------------------------
     *
     * This extra piece of configuration is necessary to extract inline
     * templates from within Component metadata, e.g.:
     *
     * @Component({
     *  template: `<h1>Hello, World!</h1>`
     * })
     * ...
     *
     * It works by extracting the template part of the file and treating it as
     * if it were a full .html file, and it will therefore match the configuration
     * specific for *.component.html above when it comes to actual rules etc.
     *
     * NOTE: This processor will skip a lot of work when it runs if you don't use
     * inline templates in your projects currently, so there is no great benefit
     * in removing it, but you can if you want to.
     *
     * You won't specify any rules here. As noted above, the rules that are relevant
     * to inline templates are the same as the ones defined for *.component.html.
     */
    {
      files: ['*.component.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },

    // Configuration for unit and e2e spec files
    {
      files: ['*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
      extends: ['plugin:jasmine/recommended'],
      plugins: ['jasmine'],
      env: { jasmine: true },
    },
    {
      files: ['e2e/**/*.e2e-spec.ts', 'e2e/**/*.po.ts'],
      parserOptions: {
        project: './e2e/tsconfig.json',
      },
      extends: ['plugin:protractor/recommended'],
      plugins: ['protractor'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};

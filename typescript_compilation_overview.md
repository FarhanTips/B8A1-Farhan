# What Happens During TypeScript Compilation (`tsc`)?

TypeScript code goes through several steps during compilation using the TypeScript compiler (`tsc`).

## 1. Type Checking
- First, the TypeScript compiler analyzes the code and checks for type-related errors.
- It checks whether variables, functions, parameters, and return values follow their declared types.
- If there are type errors, the compiler reports them.

## 2. Transpilation
- TypeScript is converted into JavaScript because browsers and Node.js execute JavaScript, not TypeScript directly.
- During this process, TypeScript-specific syntax, such as type annotations, interfaces, and type aliases, is removed.

## 3. JavaScript Output
- The compiler generates `.js` files from `.ts` files.
- It can also generate source maps (`.js.map`) and declaration files (`.d.ts`) if configured.

---

## Role of `tsconfig.json`

The `tsconfig.json` file controls how the TypeScript compiler behaves. It defines which files to compile and specifies compiler options, such as:

- **`target`**: Determines the JavaScript version to generate (e.g., `ES6`, `ES2020`).
- **`module`**: Specifies the module system, such as CommonJS or ES Modules.
- **`strict`**: Enables stricter type checking.
- **`outDir`**: Specifies where the compiled JavaScript files will be stored.
- **`rootDir`**: Specifies the root folder containing source files.

---

## Conclusion

The `tsc` compiler checks TypeScript code for errors and converts it into JavaScript. The `tsconfig.json` file provides the configuration that controls this compilation process.
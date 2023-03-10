# Jest vs Vitest

# Execution Time

- Number of tests : 37
- Each test case runs 1000 times

## Application 1:  webpack - jest 

Command : 
`nx generate @nrwl/react:application --directory=apps webpack-jest `

App Name : webpack-jest          
Bundler : Webpack (default)           
Unit Test Runner : Jest (default)           

| Trial      | Test Execution | Test Execution (--skip-nx-cache) | Watch Mode  |
| :--------- | :------------: | :------------------------------: | :---------: |
| 1          |     7.902s     |             7.786 s              |   6.855s    |
| 2          |     7.902s     |             7.961 s              |   8.594s    |
| 3          |     7.902s     |             8.245 s              |   8.415s    |
| **Result** |   **7.902s**   |           **~7.998s**            | **~7.955s** |

## Application 2 : webpack - vitest 
Command:
`nx generate @nrwl/react:application --directory=apps webpack-vitest --unitTestRunner=vitest`

App Name : webpack-vitest    
Bundler : Webpack (default)   
Unit Test Runner : Vitest    
 
| Trial      | Test Execution | Test Execution (--skip-nx-cache) | Watch Mode |
| :--------- | :------------: | :------------------------------: | :--------: |
| 1          |     1.83s      |              1.84s               |   1.79s    |
| 2          |     1.83s      |              1.81s               |   1.78s    |
| 3          |     1.83s      |              1.75s               |   1.79s    |
| **Result** |   **1.83s**    |             **1.8s**             | **~1.79s** |

## Application 3 : vite - vitest 
Command : 
`nx generate @nrwl/react:application --bundler=vite --directory=apps vite-vitest --unitTestRunner=vitest`              

App Name : vite-vitest           
Bundler : Vite              
Unit Test Runner : Vitest                

| Trial      | Test Execution | Test Execution (--skip-nx-cache) | Watch Mode |
| :--------- | :------------: | :------------------------------: | :--------: |
| 1          |     1.81s      |              1.89s               |   1.76s    |
| 2          |     1.81s      |              1.81s               |   1.87s    |
| 3          |     1.81s      |              1.82s               |   1.77s    |
| **Result** |   **1.81s**    |            **1.84s**             | **~1.8s**  |

# Running 37000 tests for each application in Parallel with flag: --skip-nx-cache

- reference : https://nx.dev/packages/nx/documents/run-many
- command : `npx nx run-many --target=test --skip-nx-cache`

| Application      | Test Execution Time |
| :--------------- | :-----------------: |
| jest + webpack   |         5s          |
| vitest + webpack |         3s          |
| vitest + vite    |         3s          |

## Running 37000 tests for each app in parallel

![run-may 37k cases](./test-results/run-parallel-37k-cases.png)

## References

- [nx run-many](https://nx.dev/packages/nx/documents/run-many)
- [vitest - watch mode, run mode](https://vitest.dev/guide/features.html#watch-mode)
- [jest - watch mode](https://jestjs.io/docs/cli)

---------------------------



<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

??? **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ???

## Development server

Run `nx serve jest-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

# Execution Time

- Number of test cases added : 37
- Each test case runs 1000 times

## Webpack + Jest Application

| Trial      | Test Execution | Test Execution (--skip-nx-cache) | Watch Mode  |
| :--------- | :------------: | :------------------------------: | :---------: |
| 1          |     7.902s     |             7.786 s              |   6.855s    |
| 2          |     7.902s     |             7.961 s              |   8.594s    |
| 3          |     7.902s     |             8.245 s              |   8.415s    |
| **Result** |   **7.902s**   |           **~7.998s**            | **~7.955s** |

## Webpack + Vitest Application

| Trial      | Test Execution | Test Execution (--skip-nx-cache) | Watch Mode |
| :--------- | :------------: | :------------------------------: | :--------: |
| 1          |     1.83s      |              1.84s               |   1.79s    |
| 2          |     1.83s      |              1.81s               |   1.78s    |
| 3          |     1.83s      |              1.75s               |   1.79s    |
| **Result** |   **1.83s**    |             **1.8s**             | **~1.79s** |

## Vite + Vitest Application

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

![run-may 37k cases](./run-parallel-37k-cases.png)

## References

- [nx run-many](https://nx.dev/packages/nx/documents/run-many)
- [vitest - watch mode, run mode](https://vitest.dev/guide/features.html#watch-mode)
- [jest - watch mode](https://jestjs.io/docs/cli)

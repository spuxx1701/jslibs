# Changelog

## [1.4.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.3.0...js-utils-v1.4.0) (2025-02-09)


### Features

* Migrate monorepo to a more isolated structure and force re-releases ([64e48f4](https://github.com/spuxx-dev/jslibs/commit/64e48f41cf207a367e19d8750f44ace18615428c))

## [1.3.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.2.0...js-utils-v1.3.0) (2024-12-29)


### Features

* **http:** Implemented new `transformFetchJson()` util function ([cae5dc2](https://github.com/spuxx-dev/jslibs/commit/cae5dc2eb53f2b567ac4a02f807821b19511bfd2))

## [1.2.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.1.2...js-utils-v1.2.0) (2024-11-06)


### Features

* **utils:** Add isEmptyArray function ([5ae1597](https://github.com/spuxx-dev/jslibs/commit/5ae1597542d50dfd2a27312f69a5cbe4052a30aa))

## [1.1.2](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.1.1...js-utils-v1.1.2) (2024-11-03)


### Bug Fixes

* **http:** Prevent transformer from being called after an error ([a953ab5](https://github.com/spuxx-dev/jslibs/commit/a953ab502d99354f9f0b9bd8a2a6402c437eb072))

## [1.1.1](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.1.0...js-utils-v1.1.1) (2024-11-02)


### Bug Fixes

* **http:** Fixed a bug in `HttpClient` that would cause fetch responses not to be handled properly sometimes ([98c69de](https://github.com/spuxx-dev/jslibs/commit/98c69de057373cf908b74e162012c730327ce7ce))
* **http:** Fixed a bug in `HttpClient` that would cause unhandled errors not to be thrown ([a5d22a8](https://github.com/spuxx-dev/jslibs/commit/a5d22a8d6168f0b9acfdc9f6b4f9a431fead8a94))
* **http:** Fixed a bug that would cause a wrong endpoint return type in case a transformer is used ([50abbe8](https://github.com/spuxx-dev/jslibs/commit/50abbe828f0d724a1aea74f0aff1c396b2e0429b))
* **http:** Fixed an issue that would cause `invokeEndpoint` to break in case of an unexpected response type ([0e3f7f8](https://github.com/spuxx-dev/jslibs/commit/0e3f7f8b56fc1b2557b950648d2051b2df049616))

## [1.1.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v1.0.0...js-utils-v1.1.0) (2024-11-02)


### Features

* **http:** Implemented `HttpClientMixin`, offering an accessible API to create simple HttpClients abstractions with support for both fetch and axios ([4157766](https://github.com/spuxx-dev/jslibs/commit/4157766c50100969a19f1d64c83346bd7cebe87a))


### Bug Fixes

* **http:** Fix `HttpClientMixin` exports ([6c2ea5f](https://github.com/spuxx-dev/jslibs/commit/6c2ea5fafdb0737228723feedc8994fefd2c5e02))

## 1.0.0 (2024-08-31)


### Features

* Add `OmitFunctionMembers` helper type ([13fd2fc](https://github.com/spuxx-dev/jslibs/commit/13fd2fc074a2d1e9192e4731e6c79949f75fa510))
* Include and export a couple of useful types ([ce53634](https://github.com/spuxx-dev/jslibs/commit/ce53634aad46c2b7f1e5e8b87e2ae743061e629b))
* **npm:** Improved documentation in package.json files ([d46e518](https://github.com/spuxx-dev/jslibs/commit/d46e5184e168f0a639cbbac041b296456033a71b))
* **readme:** Improve documentation ([b46811e](https://github.com/spuxx-dev/jslibs/commit/b46811ecd987515cb69a7b34b26c8847c58aa004))


### Documentation

* **changelog:** Documented initial release in changelog ([36d7711](https://github.com/spuxx-dev/jslibs/commit/36d77116e739afb18abad49fa77a596da28fa0fb))
* Prepared changelogs for release-please changelog generation ([a042005](https://github.com/spuxx-dev/jslibs/commit/a04200509385b77aa880de2a3d35f5558662934f))

## [0.2.0](https://github.com/spuxx-dev/jslibs/compare/js-utils-v0.1.0...js-utils-v0.2.0) (2024-07-31)


### Features

* **npm:** Improved documentation in package.json files ([d46e518](https://github.com/spuxx-dev/jslibs/commit/d46e5184e168f0a639cbbac041b296456033a71b))

## 0.1.0 (2024-07-31)

🌟 Initial release.

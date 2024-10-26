# Changelog

## [1.5.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.4.0...nest-utils-v1.5.0) (2024-10-26)


### Features

* **mapping:** MappingModule now supports sequelize ([720bcb5](https://github.com/spuxx1701/jslibs/commit/720bcb5e7f080a89b1a54c42d92a7632f7c09af1))

## [1.4.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.3.0...nest-utils-v1.4.0) (2024-10-26)


### Features

* **mapping:** Implemented MappingModule ([7bc49e9](https://github.com/spuxx1701/jslibs/commit/7bc49e92090930d828f2b5f347ec57fd4241af30))

## [1.3.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.2.0...nest-utils-v1.3.0) (2024-10-26)


### Features

* **testing:** Implement more supertest methods ([b4bdaaf](https://github.com/spuxx1701/jslibs/commit/b4bdaafb002500b89a143c687c71f75078419389))

## [1.2.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.1.4...nest-utils-v1.2.0) (2024-10-24)


### Features

* **auth:** Implemented getSession and isAuthenticated utility functions ([711d9c3](https://github.com/spuxx1701/jslibs/commit/711d9c3d9ddd1f0083290c70ffecf14eb49d6112))
* **auth:** Session resource now includes preferred_username ([e00a8e3](https://github.com/spuxx1701/jslibs/commit/e00a8e3781e1c458678537761cc51a4a52b7e64c))
* **testing:** TestContainer now offers an afterCreate hook ([26d6d02](https://github.com/spuxx1701/jslibs/commit/26d6d02165873926ad0db051d5fe09fd841c84e9))

## [1.1.4](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.1.3...nest-utils-v1.1.4) (2024-10-08)


### Bug Fixes

* **auth:** Session resource now correctly references groups claim ([0177c39](https://github.com/spuxx1701/jslibs/commit/0177c39bd25d47188968455f6e5c97b9c47b1b94))

## [1.1.3](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.1.2...nest-utils-v1.1.3) (2024-10-08)


### Bug Fixes

* **auth:** Improve AuthGuard's verbose logging ([c7f6985](https://github.com/spuxx1701/jslibs/commit/c7f6985e8af711933d3238442a94d6aa1524e4f8))
* **auth:** Update user role detection to support the common 'groups' claim ([def2ada](https://github.com/spuxx1701/jslibs/commit/def2ada1c1f7151886d796205b4d406428c49f5e))

## [1.1.2](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.1.1...nest-utils-v1.1.2) (2024-10-08)


### Bug Fixes

* **deps:** Declare `rxjs` as a peer dependency ([732922c](https://github.com/spuxx1701/jslibs/commit/732922c2a736be313b396f67b65feaf67dc5a8a2))

## [1.1.1](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.1.0...nest-utils-v1.1.1) (2024-10-08)


### Bug Fixes

* **http:** Add missing `http` exports ([43c07b8](https://github.com/spuxx1701/jslibs/commit/43c07b86775f494bb9441726f22873b94c7bf4bf))

## [1.1.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.0.0...nest-utils-v1.1.0) (2024-10-07)


### Features

* `@nanogiants/nestjs-swagger-api-exception-decorator` is now bundled into `nest-utils` ([de635f0](https://github.com/spuxx1701/jslibs/commit/de635f0fb09aa205a740429fe42f8bd13c8cad1e))
* Added `CustomLogger.getContext()` method ([4b2fb40](https://github.com/spuxx1701/jslibs/commit/4b2fb40ff4523bb34a92471de8098f09b553fc5c))
* **auth:** Replaced `authOptions.allowedRedirectUrls` with `authOptions.allowedRedirectHostnames` to better resemble the behavior of the validation ([5aa928e](https://github.com/spuxx1701/jslibs/commit/5aa928ea392aba9f9052dd2f09cf834f860541af))
* **testing:** TestAppLogger now stores messages for easier assertions and debugging ([3fee10e](https://github.com/spuxx1701/jslibs/commit/3fee10e26f75c7598246b9e6d5aed4be971e0d9a))


### Bug Fixes

* **auth:** Enabled protection for /auth/session route ([d48e033](https://github.com/spuxx1701/jslibs/commit/d48e0334db5d119967c91fed579a9f0fd24a9652))
* **auth:** Fixed a bug that would cause an internal error if an authenticated user would not have any of the application's roles ([2bcfc98](https://github.com/spuxx1701/jslibs/commit/2bcfc98c43932eeab08c9a6f902f78471da7c8be))
* **deps:** Fixed peer dependency versioning ([3f341a5](https://github.com/spuxx1701/jslibs/commit/3f341a51ab0eaa245f68bafb8a1aba12bec4a059))
* **deps:** Turned `@nanogiants/nestjs-swagger-api-exception-decorator` into a peer dependency ([b1904b4](https://github.com/spuxx1701/jslibs/commit/b1904b427611d759736df70716b82111c608fe52))
* **testing:** Fixed vitest being bundled and hoisted ([2a1cac5](https://github.com/spuxx1701/jslibs/commit/2a1cac5d123f4d2079b33fd51ba7cc47ec9243c2))
* **testing:** Removed obsolete session property on TestContainer ([2af4809](https://github.com/spuxx1701/jslibs/commit/2af4809da55495bc95a922e387a7786f6068772e))

## 1.0.0 (2024-08-31)


### Features

* Add EnvModule to help with loading and handling environment variables ([641559f](https://github.com/spuxx1701/jslibs/commit/641559f6576a0273609724498f55eacc3a64a09c))
* CustomLogger can now update its log level during runtime ([7c6e92b](https://github.com/spuxx1701/jslibs/commit/7c6e92bd0f0ac00cd743c4811850ce5dab8565c0))
* Expose TestContainer and Supertest helper classes to help with testing Nest applications ([797c471](https://github.com/spuxx1701/jslibs/commit/797c471941de1c09ff8e369f39f412a01ce16bf8))
* Implement `TransformBooleanString` transformer decorator ([b2a567d](https://github.com/spuxx1701/jslibs/commit/b2a567d37def2e8dd39a9c7c8fcb29f8ca2b9f3b))
* Implement CustomLogger class ([883fa99](https://github.com/spuxx1701/jslibs/commit/883fa99108c711fc2076e5ff0f868c0573f862e6))
* Implement HttpLoggingInterceptor ([e7df43f](https://github.com/spuxx1701/jslibs/commit/e7df43f718700fbc793f36d06e18d54e1a21a4c6))
* Introduce `AuthModule` for handling authorization and authentication through OIDC ([0d3cdd7](https://github.com/spuxx1701/jslibs/commit/0d3cdd77b7b235480a95876f248a227e509db74b))


### Bug Fixes

* EnvModule now properly loads environment variables when being accessed ([2a8f661](https://github.com/spuxx1701/jslibs/commit/2a8f661e9573f7db05869e2ed2a30085b4116919))


### Documentation

* Added comment to test ([297ffd1](https://github.com/spuxx1701/jslibs/commit/297ffd1e725fd6f42bbc32743483aa871847dbcf))

## Changelog

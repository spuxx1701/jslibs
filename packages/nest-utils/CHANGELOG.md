# Changelog

## [2.4.1](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.4.0...nest-utils-v2.4.1) (2024-11-07)


### Bug Fixes

* **transformers:** Fixed an issue with `transformBooleanString()` where undefined or nullish values would become `false` ([eaee6ee](https://github.com/spuxx1701/jslibs/commit/eaee6ee68f5e226e6eeaccb1d4e1ae05b683b3ce))

## [2.4.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.3.3...nest-utils-v2.4.0) (2024-11-06)


### Features

* **http:** Implemented '@IncludeQueryParam` decorator ([b7ebc57](https://github.com/spuxx1701/jslibs/commit/b7ebc57841b6cb27f5902497ce121fe846d23288))
* **transformers:** Implemented `@TransformArrayString()` decorator and `transformArrayString()` function ([8e77f0c](https://github.com/spuxx1701/jslibs/commit/8e77f0cd00d2f85cd13f0cdc2de35981455fdd22))
* **transformers:** Refactored `@TransformBooleanString` decorator and exposed `transformBooleanString()` function ([a11da65](https://github.com/spuxx1701/jslibs/commit/a11da65b63ea13078f55c2c169d46f26bb62bf40))


### Bug Fixes

* **auth:** Explicitly import and export `AuthGuard` ([46d43b2](https://github.com/spuxx1701/jslibs/commit/46d43b2508d0e805f5572c77ed4f66b85524f789))

## [2.3.3](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.3.2...nest-utils-v2.3.3) (2024-10-30)


### Bug Fixes

* **auth:** Mark `AuthModule` as a global module ([11f92af](https://github.com/spuxx1701/jslibs/commit/11f92af11f95192bf917a7a9449b59d699dda57a))

## [2.3.2](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.3.1...nest-utils-v2.3.2) (2024-10-30)


### Bug Fixes

* **auth:** Fixed an issue with `SessionResource` being wrongly typed that would prevent family_name from being accessible ([b76cb8e](https://github.com/spuxx1701/jslibs/commit/b76cb8e4c0bdb9a1405e2852dc15ae6a562b8102))

## [2.3.1](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.3.0...nest-utils-v2.3.1) (2024-10-29)


### Bug Fixes

* **mapping:** Fixed an issue that would cause `@Mapper()` to break on `Date` properties ([6507169](https://github.com/spuxx1701/jslibs/commit/6507169c0478fd95222c25abf09dc1c5f11d47f0))

## [2.3.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.2.0...nest-utils-v2.3.0) (2024-10-29)


### Features

* **mapping:** `@Map()` is now able to map nested properties fully automatically ([bb18d8c](https://github.com/spuxx1701/jslibs/commit/bb18d8cf9c766dccfec9ad197e2cca61f4fc119e))

## [2.2.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.1.3...nest-utils-v2.2.0) (2024-10-29)


### Features

* **mapping:** `@Map()` decorator now supports mapping nested objects ([650535f](https://github.com/spuxx1701/jslibs/commit/650535fed06215350dd6ab412e2fd84cacd74b42))

## [2.1.3](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.1.2...nest-utils-v2.1.3) (2024-10-27)


### Bug Fixes

* **mapping:** Fixed an issue that would prevent metadata to be retrieved from sequelize models correctly ([f9f30fe](https://github.com/spuxx1701/jslibs/commit/f9f30feecfb4b646095fd02239c856927d6c4f1c))

## [2.1.2](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.1.1...nest-utils-v2.1.2) (2024-10-27)


### Bug Fixes

* **mapping:** Fixed an issue that would prevent metadata to be retrieved from sequelize models correctly ([6d8106e](https://github.com/spuxx1701/jslibs/commit/6d8106ec652836c497e06b86bc687aa022dbd399))

## [2.1.1](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.1.0...nest-utils-v2.1.1) (2024-10-27)


### Bug Fixes

* **mapping:** Turned MappingModule into a global module ([afc545d](https://github.com/spuxx1701/jslibs/commit/afc545d37a5019ed8af643f359c600a8a26c8e44))

## [2.1.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v2.0.0...nest-utils-v2.1.0) (2024-10-27)


### Features

* **mapping:** Mapping now implements the preserveUndefined option ([14ba050](https://github.com/spuxx1701/jslibs/commit/14ba05070fc9e17c0dd350fd5984955dd0dde176))


### Bug Fixes

* **mapping:** Export @Map() decorator ([7f16918](https://github.com/spuxx1701/jslibs/commit/7f169187e81791bf8312f13e9ba328d7bd86058e))

## [2.0.0](https://github.com/spuxx1701/jslibs/compare/nest-utils-v1.5.0...nest-utils-v2.0.0) (2024-10-27)


### ⚠ BREAKING CHANGES

* **mapping:** Replaced automapper integration with a custom implementation of MappingModule

### Features

* **mapping:** Replaced automapper integration with a custom implementation of MappingModule ([49cf08e](https://github.com/spuxx1701/jslibs/commit/49cf08eb0dd08ff83303e8df50def13dc8990db7))


### Bug Fixes

* **mapping:** Export mapper service ([eac1ab2](https://github.com/spuxx1701/jslibs/commit/eac1ab2fb0306bef46503004eddccb8d49c26f8c))

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

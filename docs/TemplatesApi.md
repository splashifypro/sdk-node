# TemplatesApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicTemplatesGet**](TemplatesApi.md#publictemplatesget) | **GET** /public/templates | List templates |
| [**publicTemplatesInsightsGet**](TemplatesApi.md#publictemplatesinsightsget) | **GET** /public/templates/insights | Template insights |



## publicTemplatesGet

> { [key: string]: any; } publicTemplatesGet(status)

List templates

List the WhatsApp message templates of your account, with their approval status.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@splashifypro/sdk';
import type { PublicTemplatesGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TemplatesApi(config);

  const body = {
    // string | Only this status, for example APPROVED (optional)
    status: status_example,
  } satisfies PublicTemplatesGetRequest;

  try {
    const data = await api.publicTemplatesGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **status** | `string` | Only this status, for example APPROVED | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | { result: true, templates: [...], count: n } |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicTemplatesInsightsGet

> { [key: string]: any; } publicTemplatesInsightsGet(days)

Template insights

Sent, delivered, read, button click and reply rates per template over the last 30 or 90 days, with the account average.

### Example

```ts
import {
  Configuration,
  TemplatesApi,
} from '@splashifypro/sdk';
import type { PublicTemplatesInsightsGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TemplatesApi(config);

  const body = {
    // number | 30 (default) or 90 (optional)
    days: 56,
  } satisfies PublicTemplatesInsightsGetRequest;

  try {
    const data = await api.publicTemplatesInsightsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **days** | `number` | 30 (default) or 90 | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | { success, days, broadcasts, rows[], averages } |  -  |
| **401** | Missing or invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


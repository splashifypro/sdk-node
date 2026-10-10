# BroadcastsApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicBroadcastsIdAutoRetargetDelete**](BroadcastsApi.md#publicbroadcastsidautoretargetdelete) | **DELETE** /public/broadcasts/{id}/auto-retarget | Cancel an automatic retarget |
| [**publicBroadcastsIdAutoRetargetGet**](BroadcastsApi.md#publicbroadcastsidautoretargetget) | **GET** /public/broadcasts/{id}/auto-retarget | Get a broadcast\&#39;s automatic retarget |
| [**publicBroadcastsIdAutoRetargetPost**](BroadcastsApi.md#publicbroadcastsidautoretargetpost) | **POST** /public/broadcasts/{id}/auto-retarget | Schedule an automatic retarget |



## publicBroadcastsIdAutoRetargetDelete

> { [key: string]: any; } publicBroadcastsIdAutoRetargetDelete(id)

Cancel an automatic retarget

### Example

```ts
import {
  Configuration,
  BroadcastsApi,
} from '@splashifypro/sdk';
import type { PublicBroadcastsIdAutoRetargetDeleteRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BroadcastsApi(config);

  const body = {
    // string | Broadcast id
    id: id_example,
  } satisfies PublicBroadcastsIdAutoRetargetDeleteRequest;

  try {
    const data = await api.publicBroadcastsIdAutoRetargetDelete(body);
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
| **id** | `string` | Broadcast id | [Defaults to `undefined`] |

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
| **200** | { success, rule } (rule status cancelled) |  -  |
| **400** | Invalid broadcast id |  -  |
| **401** | Missing or invalid API key |  -  |
| **409** | No waiting retarget: none, or it already sent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicBroadcastsIdAutoRetargetGet

> { [key: string]: any; } publicBroadcastsIdAutoRetargetGet(id)

Get a broadcast\&#39;s automatic retarget

### Example

```ts
import {
  Configuration,
  BroadcastsApi,
} from '@splashifypro/sdk';
import type { PublicBroadcastsIdAutoRetargetGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BroadcastsApi(config);

  const body = {
    // string | Broadcast id (GraphQL broadcasts query)
    id: id_example,
  } satisfies PublicBroadcastsIdAutoRetargetGetRequest;

  try {
    const data = await api.publicBroadcastsIdAutoRetargetGet(body);
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
| **id** | `string` | Broadcast id (GraphQL broadcasts query) | [Defaults to `undefined`] |

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
| **200** | { success, rule } (rule is null when none) |  -  |
| **400** | Invalid broadcast id |  -  |
| **401** | Missing or invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicBroadcastsIdAutoRetargetPost

> { [key: string]: any; } publicBroadcastsIdAutoRetargetPost(id, body)

Schedule an automatic retarget

After delay_hours (1 to 72), sends a follow-up to the people who got the broadcast but did not read it. Same template unless template_id is given (WhatsApp only), with template_params as a JSON string of its components. Charged like any broadcast when it sends.

### Example

```ts
import {
  Configuration,
  BroadcastsApi,
} from '@splashifypro/sdk';
import type { PublicBroadcastsIdAutoRetargetPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BroadcastsApi(config);

  const body = {
    // string | Broadcast id
    id: id_example,
    // object | { delay_hours, consent_attested: true, template_id?, template_params? }
    body: Object,
  } satisfies PublicBroadcastsIdAutoRetargetPostRequest;

  try {
    const data = await api.publicBroadcastsIdAutoRetargetPost(body);
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
| **id** | `string` | Broadcast id | [Defaults to `undefined`] |
| **body** | `object` | { delay_hours, consent_attested: true, template_id?, template_params? } | |

### Return type

**{ [key: string]: any; }**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | { success, rule } |  -  |
| **400** | Consent not confirmed, wait out of range, or template not found |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Broadcast not found |  -  |
| **409** | Broadcast not finished, or it already has a retarget |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


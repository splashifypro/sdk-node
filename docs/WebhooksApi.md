# WebhooksApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appWebhooksEventsGet**](WebhooksApi.md#appwebhookseventsget) | **GET** /app/webhooks/events | List subscribable webhook event names |
| [**appWebhooksGet**](WebhooksApi.md#appwebhooksget) | **GET** /app/webhooks | List registered webhooks |
| [**appWebhooksIdDelete**](WebhooksApi.md#appwebhooksiddelete) | **DELETE** /app/webhooks/{id} | Delete a webhook |
| [**appWebhooksIdGet**](WebhooksApi.md#appwebhooksidget) | **GET** /app/webhooks/{id} | Get a webhook |
| [**appWebhooksIdPatch**](WebhooksApi.md#appwebhooksidpatch) | **PATCH** /app/webhooks/{id} | Update a webhook |
| [**appWebhooksIdRotateSecretPost**](WebhooksApi.md#appwebhooksidrotatesecretpost) | **POST** /app/webhooks/{id}/rotate-secret | Rotate a webhook\&#39;s signing secret |
| [**appWebhooksIdTestPost**](WebhooksApi.md#appwebhooksidtestpost) | **POST** /app/webhooks/{id}/test | Send a test event |
| [**appWebhooksPost**](WebhooksApi.md#appwebhookspost) | **POST** /app/webhooks | Register a webhook |



## appWebhooksEventsGet

> { [key: string]: any; } appWebhooksEventsGet()

List subscribable webhook event names

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@splashifypro/sdk';
import type { AppWebhooksEventsGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  try {
    const data = await api.appWebhooksEventsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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
| **200** | { success, events } |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWebhooksGet

> { [key: string]: any; } appWebhooksGet()

List registered webhooks

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@splashifypro/sdk';
import type { AppWebhooksGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  try {
    const data = await api.appWebhooksGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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
| **200** | { success, webhooks } |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWebhooksIdDelete

> { [key: string]: any; } appWebhooksIdDelete(id)

Delete a webhook

Deleting the webhook backing Settings → Developer → Configure Webhook resets that page to \&quot;not configured\&quot; rather than leaving it pointing at a dangling id.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@splashifypro/sdk';
import type { AppWebhooksIdDeleteRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook ID
    id: id_example,
  } satisfies AppWebhooksIdDeleteRequest;

  try {
    const data = await api.appWebhooksIdDelete(body);
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
| **id** | `string` | Webhook ID | [Defaults to `undefined`] |

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
| **200** | { success, message } |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWebhooksIdGet

> { [key: string]: any; } appWebhooksIdGet(id)

Get a webhook

Returns one webhook regardless of whether it was created via this API or Settings → Developer → Configure Webhook — same fields either way. The secret is never echoed here; read it from GET /app/developer/settings (console webhook) or the create/rotate-secret response (only shown once).

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@splashifypro/sdk';
import type { AppWebhooksIdGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook ID
    id: id_example,
  } satisfies AppWebhooksIdGetRequest;

  try {
    const data = await api.appWebhooksIdGet(body);
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
| **id** | `string` | Webhook ID | [Defaults to `undefined`] |

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
| **200** | { success, webhook } |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWebhooksIdPatch

> { [key: string]: any; } appWebhooksIdPatch(id, body)

Update a webhook

Sparse update — only url/events/description fields present in the body are changed. The id and secret never change; rotate the secret via POST /app/webhooks/{id}/rotate-secret.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@splashifypro/sdk';
import type { AppWebhooksIdPatchRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook ID
    id: id_example,
    // object | { url?: string, events?: string[], description?: string } (optional)
    body: Object,
  } satisfies AppWebhooksIdPatchRequest;

  try {
    const data = await api.appWebhooksIdPatch(body);
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
| **id** | `string` | Webhook ID | [Defaults to `undefined`] |
| **body** | `object` | { url?: string, events?: string[], description?: string } | [Optional] |

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
| **200** | { success, webhook } |  -  |
| **400** | Invalid URL / events |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWebhooksIdRotateSecretPost

> { [key: string]: any; } appWebhooksIdRotateSecretPost(id)

Rotate a webhook\&#39;s signing secret

Invalidates the old secret immediately — the new one is shown once in this response. Works on a webhook migrated from Settings → Developer → Configure Webhook the same way it works on one created via POST /app/webhooks.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@splashifypro/sdk';
import type { AppWebhooksIdRotateSecretPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook ID
    id: id_example,
  } satisfies AppWebhooksIdRotateSecretPostRequest;

  try {
    const data = await api.appWebhooksIdRotateSecretPost(body);
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
| **id** | `string` | Webhook ID | [Defaults to `undefined`] |

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
| **200** | { success, message, secret } |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWebhooksIdTestPost

> { [key: string]: any; } appWebhooksIdTestPost(id)

Send a test event

Fires a signed { event: \&quot;test\&quot;, ... } payload at the webhook\&#39;s URL asynchronously — the 200 here only confirms the request was queued, not that delivery succeeded.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@splashifypro/sdk';
import type { AppWebhooksIdTestPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string | Webhook ID
    id: id_example,
  } satisfies AppWebhooksIdTestPostRequest;

  try {
    const data = await api.appWebhooksIdTestPost(body);
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
| **id** | `string` | Webhook ID | [Defaults to `undefined`] |

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
| **200** | { success, message } |  -  |
| **400** | Webhook URL not allowed |  -  |
| **404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWebhooksPost

> { [key: string]: any; } appWebhooksPost(body)

Register a webhook

Registers a webhook subscribed to the given events. The response\&#39;s secret is shown once — every delivery to this URL is signed with it (see Verifying signatures in the webhooks guide). A webhook created here and one configured via Settings → Developer → Configure Webhook are the same kind of object — GET /app/webhooks lists both, signed the same way.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@splashifypro/sdk';
import type { AppWebhooksPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WebhooksApi(config);

  const body = {
    // object | { url: string, events: string[], description?: string }
    body: Object,
  } satisfies AppWebhooksPostRequest;

  try {
    const data = await api.appWebhooksPost(body);
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
| **body** | `object` | { url: string, events: string[], description?: string } | |

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
| **201** | { success, webhook: { id, url, events, secret, ... } } |  -  |
| **400** | Invalid URL / events |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


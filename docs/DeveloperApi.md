# DeveloperApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appDeveloperOptOutErrorPut**](DeveloperApi.md#appdeveloperoptouterrorput) | **PUT** /app/developer/opt-out-error | Toggle opt-out send errors |
| [**appDeveloperSecretKeyGeneratePost**](DeveloperApi.md#appdevelopersecretkeygeneratepost) | **POST** /app/developer/secret-key/generate | Generate (or regenerate) the API secret key |
| [**appDeveloperSettingsGet**](DeveloperApi.md#appdevelopersettingsget) | **GET** /app/developer/settings | Get developer settings |
| [**appDeveloperWebhookPut**](DeveloperApi.md#appdeveloperwebhookput) | **PUT** /app/developer/webhook | Configure the console webhook |



## appDeveloperOptOutErrorPut

> { [key: string]: any; } appDeveloperOptOutErrorPut(body)

Toggle opt-out send errors

When enabled, the Message Send API returns an error instead of silently no-op\&#39;ing when called for a contact who has opted out.

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@splashifypro/sdk';
import type { AppDeveloperOptOutErrorPutRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DeveloperApi(config);

  const body = {
    // HandlersUpdateOptOutErrorRequest | { enabled: boolean }
    body: ...,
  } satisfies AppDeveloperOptOutErrorPutRequest;

  try {
    const data = await api.appDeveloperOptOutErrorPut(body);
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
| **body** | [HandlersUpdateOptOutErrorRequest](HandlersUpdateOptOutErrorRequest.md) | { enabled: boolean } | |

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
| **200** | { success, message } |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appDeveloperSecretKeyGeneratePost

> { [key: string]: any; } appDeveloperSecretKeyGeneratePost()

Generate (or regenerate) the API secret key

Invalidates any existing sk_live_ key immediately. This is the Authorization key for /api/v1/public/_* requests — a different secret from any webhook\&#39;s signing secret.

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@splashifypro/sdk';
import type { AppDeveloperSecretKeyGeneratePostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DeveloperApi(config);

  try {
    const data = await api.appDeveloperSecretKeyGeneratePost();
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
| **200** | { success, message, secret_key } |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appDeveloperSettingsGet

> { [key: string]: any; } appDeveloperSettingsGet()

Get developer settings

webhook_id/webhook_secret/webhook_active describe the real app_webhooks row backing this page\&#39;s Configure Webhook editor — the same object GET /app/webhooks lists and POST /app/webhooks/{id}/rotate-secret operates on. Deliveries to webhook_url are signed with webhook_secret exactly like any webhook created through that API.

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@splashifypro/sdk';
import type { AppDeveloperSettingsGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DeveloperApi(config);

  try {
    const data = await api.appDeveloperSettingsGet();
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
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appDeveloperWebhookPut

> { [key: string]: any; } appDeveloperWebhookPut(body)

Configure the console webhook

Creates or updates the single app_webhooks row backing this page — its id and signing secret stay stable across edits, so changing the URL never invalidates signature verification. Deliveries are signed exactly like a webhook created via POST /app/webhooks (same headers, same HMAC scheme) — see Verifying signatures in the webhooks guide. An empty webhook_url deactivates it without deleting it; reconfiguring later reuses the same id and secret. Manage it like any other webhook via GET/PATCH/DELETE /app/webhooks/{id} and /rotate-secret using the webhook_id returned by GET /app/developer/settings.

### Example

```ts
import {
  Configuration,
  DeveloperApi,
} from '@splashifypro/sdk';
import type { AppDeveloperWebhookPutRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DeveloperApi(config);

  const body = {
    // HandlersUpdateWebhookRequest | { webhook_url: string, webhook_events: string[] }
    body: ...,
  } satisfies AppDeveloperWebhookPutRequest;

  try {
    const data = await api.appDeveloperWebhookPut(body);
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
| **body** | [HandlersUpdateWebhookRequest](HandlersUpdateWebhookRequest.md) | { webhook_url: string, webhook_events: string[] } | |

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
| **200** | { success, message, webhook_id } |  -  |
| **400** | Invalid URL / events |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


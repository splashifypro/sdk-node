# QRCodesApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicQrCodesGet**](QRCodesApi.md#publicqrcodesget) | **GET** /public/qr-codes | List QR codes |
| [**publicQrCodesIdDelete**](QRCodesApi.md#publicqrcodesiddelete) | **DELETE** /public/qr-codes/{id} | Delete a QR code |
| [**publicQrCodesIdPatch**](QRCodesApi.md#publicqrcodesidpatch) | **PATCH** /public/qr-codes/{id} | Update a QR code |
| [**publicQrCodesPost**](QRCodesApi.md#publicqrcodespost) | **POST** /public/qr-codes | Create a QR code |



## publicQrCodesGet

> { [key: string]: any; } publicQrCodesGet()

List QR codes

Every WhatsApp QR code on the account with its link, scans and chats in the last 7 and 30 days, plus daily scans for 30 days.

### Example

```ts
import {
  Configuration,
  QRCodesApi,
} from '@splashifypro/sdk';
import type { PublicQrCodesGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new QRCodesApi(config);

  try {
    const data = await api.publicQrCodesGet();
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
| **200** | { success, links[{ id, name, prefill, slug, url, scans_7d, scans_30d, chats_7d, chats_30d, created_at }], daily, tracking_available, base_url, phone } |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicQrCodesIdDelete

> { [key: string]: any; } publicQrCodesIdDelete(id)

Delete a QR code

### Example

```ts
import {
  Configuration,
  QRCodesApi,
} from '@splashifypro/sdk';
import type { PublicQrCodesIdDeleteRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new QRCodesApi(config);

  const body = {
    // string | QR code id
    id: id_example,
  } satisfies PublicQrCodesIdDeleteRequest;

  try {
    const data = await api.publicQrCodesIdDelete(body);
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
| **id** | `string` | QR code id | [Defaults to `undefined`] |

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
| **200** | { success } |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | QR code not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicQrCodesIdPatch

> { [key: string]: any; } publicQrCodesIdPatch(id, body)

Update a QR code

Changes the name or the prefilled message. The link and the printed QR code stay the same.

### Example

```ts
import {
  Configuration,
  QRCodesApi,
} from '@splashifypro/sdk';
import type { PublicQrCodesIdPatchRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new QRCodesApi(config);

  const body = {
    // string | QR code id
    id: id_example,
    // object | { name?, prefill? }
    body: Object,
  } satisfies PublicQrCodesIdPatchRequest;

  try {
    const data = await api.publicQrCodesIdPatch(body);
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
| **id** | `string` | QR code id | [Defaults to `undefined`] |
| **body** | `object` | { name?, prefill? } | |

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
| **200** | { success, link } |  -  |
| **400** | Invalid id or nothing to change |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | QR code not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicQrCodesPost

> { [key: string]: any; } publicQrCodesPost(body)

Create a QR code

Creates a tracked WhatsApp link and QR code. prefill is the message the customer\&#39;s chat opens with (up to 500 characters). Up to 200 QR codes per account.

### Example

```ts
import {
  Configuration,
  QRCodesApi,
} from '@splashifypro/sdk';
import type { PublicQrCodesPostRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new QRCodesApi(config);

  const body = {
    // object | { name, prefill? }
    body: Object,
  } satisfies PublicQrCodesPostRequest;

  try {
    const data = await api.publicQrCodesPost(body);
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
| **body** | `object` | { name, prefill? } | |

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
| **201** | { success, link } |  -  |
| **400** | Name missing or too long |  -  |
| **401** | Missing or invalid API key |  -  |
| **403** | QR codes with counts are not available on this account |  -  |
| **409** | WhatsApp number not connected, or 200 QR codes already |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


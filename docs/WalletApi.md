# WalletApi

All URIs are relative to *https://apis.splashifypro.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appWalletAlertsGet**](WalletApi.md#appwalletalertsget) | **GET** /app/wallet/alerts | Get the low-balance alert threshold |
| [**appWalletAlertsPut**](WalletApi.md#appwalletalertsput) | **PUT** /app/wallet/alerts | Set the low-balance alert threshold |
| [**appWalletInfoGet**](WalletApi.md#appwalletinfoget) | **GET** /app/wallet/info | Wallet balance |



## appWalletAlertsGet

> { [key: string]: any; } appWalletAlertsGet()

Get the low-balance alert threshold

The balance at which the wallet_low webhook fires. is_default is true when the account has not configured one and the ₹100 platform default is in effect.

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '@splashifypro/sdk';
import type { AppWalletAlertsGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WalletApi(config);

  try {
    const data = await api.appWalletAlertsGet();
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
| **200** | { success, low_balance_threshold, is_default, currency } |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWalletAlertsPut

> { [key: string]: any; } appWalletAlertsPut(body)

Set the low-balance alert threshold

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '@splashifypro/sdk';
import type { AppWalletAlertsPutRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WalletApi(config);

  const body = {
    // object | { low_balance_threshold: number }
    body: Object,
  } satisfies AppWalletAlertsPutRequest;

  try {
    const data = await api.appWalletAlertsPut(body);
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
| **body** | `object` | { low_balance_threshold: number } | |

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
| **200** | { success, low_balance_threshold } |  -  |
| **400** | low_balance_threshold must be a positive number |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## appWalletInfoGet

> { [key: string]: any; } appWalletInfoGet()

Wallet balance

Wallet balance and last recharge info for the current app user. spent_balance accumulates from every wallet debit (direct sends and broadcasts) — accounts predating this accumulation may see a jump rather than a full history.

### Example

```ts
import {
  Configuration,
  WalletApi,
} from '@splashifypro/sdk';
import type { AppWalletInfoGetRequest } from '@splashifypro/sdk';

async function example() {
  console.log("🚀 Testing @splashifypro/sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: BearerAuth
    apiKey: "YOUR API KEY",
  });
  const api = new WalletApi(config);

  try {
    const data = await api.appWalletInfoGet();
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
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


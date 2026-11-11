# api/services.py
from curl_cffi import requests as cffi_requests

def get_aredl_levels():
    """Fetches live AREDL levels using curl_cffi to bypass Cloudflare."""
    try:
        # Request the AREDL v2 levels endpoint
        response = cffi_requests.get(
            "https://api.aredl.net/v2/levels",
            impersonate="chrome120",
            timeout=15
        )
        
        print(f"-> AREDL API Status Code: {response.status_code}", flush=True)
        
        if response.status_code == 200:
            return response.json()
        else:
            # Print a preview of what Cloudflare/AREDL returned (e.g. HTML block page)
            print(f"-> Failed Response Preview: {response.text[:300]}", flush=True)
            
    except Exception as e:
        print(f"-> Exception in get_aredl_levels: {e}", flush=True)
        
    return []
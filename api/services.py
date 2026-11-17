# api/services.py
from curl_cffi import requests as cffi_requests

AREDL_API_BASE = "https://api.aredl.net/v2"

def get_aredl_levels():
    """Fetches live AREDL levels by spoofing full browser session cookies and headers."""
    try:
        # Create a persistent session to handle cookies automatically
        session = cffi_requests.Session()
        
        # Realistic browser headers matching the actual site traffic
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": "https://aredl.net/",
            "Origin": "https://aredl.net"
        }
        
        # 1. Hit the base domain first to pick up Cloudflare clearance cookies
        session.get("https://aredl.net/", headers=headers, impersonate="chrome120", timeout=15)
        
        # 2. Now request the levels endpoint using the same session
        response = session.get(
            f"{AREDL_API_BASE}/levels", 
            headers=headers, 
            impersonate="chrome120", 
            timeout=15
        )
        
        print(f"-> AREDL API Status Code: {response.status_code}", flush=True)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"-> Blocked preview: {response.text[:200]}", flush=True)
            
    except Exception as e:
        print(f"-> Exception during fetch: {e}", flush=True)
        
    return []
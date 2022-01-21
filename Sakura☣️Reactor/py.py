import sys
import json
import requests

url = "https://opensourcepyapi.herokuapp.com:443/weather/06604"
r = requests.get(url)
data = r.json()
resp = {
    "Response": 200,
    "Message": "Python Hello!",
    "Data": data
}
print(json.dumps(resp))
sys.stdout.flush()

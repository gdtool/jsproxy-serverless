{
    "version": 2,
    "name": "jsproxy-serverless",
    "builds": [{
        "src": "index.js",
        "use": "@now/node"
    }],
    "alias": "{{your domain}}",
    "routes": [{
        "src": "/http",
        "dest": "index.js"
    }],
    "regions": ["sin", "sfo"]
}

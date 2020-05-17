# aws lambda homework

1. Create lambda from console
2. Create lambda from aws cli
    ```
    zip function.zip index.js
    aws lambda create-function --function-name function-name --zip-file fileb://function.zip --handler index.handler --runtime nodejs12.x
    ```

3. create lambda from cloudFormation
```
/severless.yaml
/cloudformation-3.json
```

4. Access s3 bucket and read file from s3 bucket
    - create s3 by aws cli/console
    - setup access rule for s3
    - code to read from s3

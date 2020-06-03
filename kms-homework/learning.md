1. set aws cli
> aws configure

2. create key
> aws kms create-key

3. create alias for key
> aws kms create-alias --alias-name alias/{alias-name} --target-key-id {key id}

4. encrypt based on key

```
$ touch ExamplePlaintextFile  // create plain text file
$ aws kms encrypt --key-id {key id} \
--plaintext fileb://ExamplePlaintextFile \
--output text \
--query CiphertextBlob | base64 \
--decode > ExampleEncryptedFile

// use key to encrypt plain text, base64 decoded encrypted text and output to file
```

4. decrypt based on key

```
$ aws kms decrypt --ciphertext-blob fileb://ExampleEncryptedFile --output text --query Plaintext | base64 --decode > ExamplePlaintextFile_decrypt

// use key to decrypt cipher text, base64 decoded decrypted text and output to file
```

5. disable key
> aws kms disable-key --key-id {key-id}

6. decrypt based on disabled key
An error occurred (DisabledException) when calling the Decrypt operation: arn:aws:kms:ap-southeast-1:7878**:key/a0** is disabled.


## Lambda decrypt
1. udpate code to decrypt
2. grant permission for cmk
```
aws kms create-grant --key-id {key id} --grantee-principal {arn for user or role} --operations Decrypt
```



3. retrie grant

> $ aws kms list-grants --key-id {key id}

> $ aws kms retire-grant --key-id {key arn} --grant-id {grant id} --grant-token {token}


module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dqxy5oxdb',
        api_key: '737224655664861',
        api_secret: '17szQ71CkAP4T7Y08XsRBBjB3Bs',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
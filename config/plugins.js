module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: env('TOKEN_NETLIFY'),
      sites: [
        {
          name: 'effulgent-sorbet-97d0de',
          id: "2eff04a5-6fd6-43b1-803c-9e0e0ff385ec",
          branch: 'master' // optional
        }
      ]
    },
  },
});

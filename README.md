# Cloudflare Worker for Embedding dose.lol Pages (doselol-CusDomain)

This Cloudflare Worker allows you to embed [dose.lol](https://dose.lol/) pages on your own domain. With this worker, you can use your own domain to show your dose.lol page, such as `bio.example.com`.

To use this worker, you'll need to deploy it to Cloudflare Workers. First, create an account with Cloudflare and add your domain to Cloudflare using these [steps](https://community.cloudflare.com/t/step-1-adding-your-domain-to-cloudflare/64309). Then, follow these steps:

1. Click on the Workers tab near the bottom of your Cloudflare dashboard.

![Step 1](https://cdn.upload.systems/uploads/W4w1U9hz.png)

2. Click the "Create a Worker" button.
![Step 2](https://cdn.upload.systems/uploads/FizWgIF1.png)
3. Name it whatever you want (like mybiolol), and select HTTP Router, as it is similar to the code here.
![Step 3](https://cdn.upload.systems/uploads/nFpnFVb0.png)
4. After you made it, click "Quick Edit"
![Step 4](https://cdn.upload.systems/uploads/yIVUwr4s.png)
5. There are 2 variations of this code:
   - [Domain for everyone (so it serves entire dose.lol website)](https://raw.githubusercontent.com/VlastikYoutubeKo/doselol-CusDomain/main/entire-dose.lol.js)
     1. If you use this, follow this:
        1. Just input the code as the B below, but do not change anything.
     
        ![Step 5 & 6](![Step 5 & 6](https://cdn.upload.systems/uploads/wix7MGfQ.png))

   - [Domain for you.](https://raw.githubusercontent.com/VlastikYoutubeKo/doselol-CusDomain/main/dose.lol_slash_yourname.js)
     1. If you use this, follow this:
        1. Replace `myname` in the code with your own dose.lol page name, such as `dude`.
     
        ![Step 5 & 6](https://cdn.upload.systems/uploads/sZAxlZk4.png)
       
6. Click "Save and Deploy".

Now, when someone visits `random-name.yourusername.workers.dev`, they will see your dose.lol page embedded on your domain. If they try to visit any other path on your domain, they will receive a 404 error.

# How to Use Your Own Domain on Cloudflare Workers

To use your own domain on Cloudflare Workers, you'll need to first add the domain to Cloudflare. Follow these [steps](https://community.cloudflare.com/t/step-1-adding-your-domain-to-cloudflare/64309) to add your domain.

Then, follow these steps:

1. Click on the Workers tab near the bottom of your Cloudflare dashboard again.

![Step 2-7](https://cdn.upload.systems/uploads/W4w1U9hz.png)

2. Go to your Bio worker tab
3. Click on view next to Custom Domains
![Step 2-9](https://cdn.upload.systems/uploads/rMCW2YWZ.png)
4. Under Custom Domains, click Add Custom Domain
![Step 2-10](https://cdn.upload.systems/uploads/4aCWOsHy.png)
5. Enter your domain that you have linked on CloudFlare, and click add domain.
And you are done!






# How it looks?
![Finished look](https://cdn.upload.systems/uploads/lTXbQdqX.png)

Note that this worker only works with Cloudflare Workers, and cannot be used with other hosting services such as Github Pages or Github Actions.


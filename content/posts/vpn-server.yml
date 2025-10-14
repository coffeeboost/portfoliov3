title: "You can create your own vpn in less than 1 hour"
date: 2025-10-13
summary: |
  ---
    Yep, you read that right. You can create your own VPN server for private use all by yourself. You need a Google Cloud account (free tier available), and your phone!

    Steps:
    - Open a Google Cloud account
    - create a server instance. Click the cheapest option (E2 Micro, Iowa, HDD storage) which qualifies for the free cloud tier.
    - ssh into the server. Set up your wireguard.
    - configure the server firewall. Open ip forwarding, open port UDP 51820, set allowed IPs to 0.0.0.0/0.
    - create public/private keys in ssh.
    - set up NAT in ssh. This gives you internet access when your phone is connected to your instance.
    - go to your phone, install the wireguard app.
    - create public/private keys in the app.
    - copy paste the public keys from your ssh to your phone and vice versa.
    - set allowed IPs to 0.0.0.0/0 which means all network activity.
    - voilà!

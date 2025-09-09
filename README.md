root@adbacklist:/etc/nginx/sites-enabled# history
1 sudo apt update
2 sudo apt upgrade
3 sudo apt -y install build-essential checkinstall && sudo apt install gdebi-core wget -y && sudo apt -y install ubuntu-restricted-extras && sudo apt update && sudo apt -y install kazam && sudo snap install vlc && sudo add-apt-repository ppa:git-core/ppa -y && sudo apt update && sudo apt -y install git curl
4 rm -rf /etc/apt/sources.list.d/nilarimogard-ubuntu-webupd8-jammy.list {if needed}
5 apt update
6 sudo apt install ca-certificates gnupg curl wget git -y
7 node -v
8 sudo apt install ca-certificates gnupg curl wget git -y
9 sudo apt-get install -y ca-certificates gnupg gcc g++ make

10 sudo apt-get update
11 sudo apt-get install -y ca-certificates curl gnupg
12 sudo mkdir -p /etc/apt/keyrings
13 curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
14 NODE*MAJOR=20
15 echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node*$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
18 sudo apt-get update
19 sudo apt-get install nodejs -y
20 node -v
21 sudo apt install nginx python3-certbot-nginx
22 npm i -g pm2

    {when password need 23-27}

23 nano /etc/ssh/sshd_config
24 passwd
25 Zia308104++--
26 passwd
27 systemctl restart sshd

git config --global user.name "Ahad69"
git config --global user.email "ahadxx99@gmail.com"

28 cd /var/www/html/
32 git clone https://github.com/Ahad69/dnilam-shop-front-end.git
sudo chown -R $USER /var/www {if fatal: could not create work tree dir 'dnilamxyzbackend': Permission denied}
33 ls
34 cd dnilam-shop-front-end/
35 ls
36 cd ..
37 ls
38 git clone https://github.com/Ahad69/dnilam-shop-backend.git
39 ls
40 cd dnilam-shop-backend/
41 ls
42 nano .env
43 ls
44 npm i
45 ls
46 nnao package.json
47 nano package.json
48 ls
49 pm2 start npm --name "server" -- start
50 netstat -tnpl
51 cd ../dnilam-shop-front-end/
52 ls
53 npm i
54 npm run build
55 pm2 start npm --name "frontend" -- start
56 pm2 save
57 pm2 status
58 cd /etc/nginx/sites-enabled/
59 ls
60 rm -rf default
61 nano dnilam-front.conf
62 nginx -t
63 certbot --nginx

pm2 start npm --name "user-admin" -- start

https://phoenixnap.com/kb/generate-ssh-key-windows-10

server {
listen 80;
server_name admin.adbacklist.com;
gzip on;
gzip_proxied any;
gzip_types application/javascript application/x-javascript text/css text/javascript;
gzip_comp_level 5;
gzip_buffers 16 8k;
gzip_min_length 256;

    location /_next/static/ {
                alias /var/www/html/adbacklist-admin/.next/static/; # !!! - change to your app name
                expires 365d;
                access_log off;
        }

    location / {
                proxy_pass http://127.0.0.1:3000; # !!! - change to your app port
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

}

server {
listen 80;
server_name admin.dnilam.xyz;
gzip on;
gzip_proxied any;
gzip_types application/javascript application/x-javascript text/css text/javascript;
gzip_comp_level 5;
gzip_buffers 16 8k;
gzip_min_length 256;

    location /_next/static/ {
                alias /var/www/html/dnilam-xyz-admin/.next/static/; # !!! - change to your app name
                expires 365d;
                access_log off;
        }

    location / {
                proxy_pass http://127.0.0.1:3001; # !!! - change to your app port
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

}

server {
listen 80;
server_name api3.adbacklist.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}

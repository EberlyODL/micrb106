FROM eberlyodl/haxcms:latest as haxcms

FROM nginx

COPY --from=haxcms /var/www/html/build /usr/share/nginx/html/build
COPY --from=haxcms /var/www/html/dist /usr/share/nginx/html/dist

# COPY httpd.conf /usr/local/apache2/conf/httpd.conf
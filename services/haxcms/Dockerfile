FROM elmsln/haxcms:latest as haxcms

FROM httpd:2.4

COPY --from=haxcms /var/www/html/build /usr/local/apache2/htdocs/build
COPY --from=haxcms /var/www/html/dist /usr/local/apache2/htdocs/dist

COPY nginx.conf /etc/nginx/nginx.conf
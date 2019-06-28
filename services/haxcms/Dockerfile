FROM eberlyodl/haxcms:latest as haxcms

FROM php:7.3-apache

RUN a2enmod rewrite

COPY --from=haxcms /var/www/html/build /var/www/html/build
COPY --from=haxcms /var/www/html/dist /var/www/html/dist

COPY ./apache2.conf /etc/apache2/apache2.conf

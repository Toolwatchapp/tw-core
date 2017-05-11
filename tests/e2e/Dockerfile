FROM mathieunls/tw-test:latest

RUN rm -fr /app && git clone --depth=50 --branch=master https://github.com/Toolwatchapp/tw-backend.git /app

RUN curl -u tw_Z7FzKQUgkX6NZgSY:gg3DuFmL9EBSJt2L https://tw-config.herokuapp.com/schema.sql > database.sql

RUN service mysql start && mysql -u root -proot -e 'source database.sql'

RUN curl -u tw_Z7FzKQUgkX6NZgSY:gg3DuFmL9EBSJt2L https://tw-config.herokuapp.com/tw.conf > /etc/apache2/tw.conf

RUN echo "Include tw.conf" >> /etc/apache2/apache2.conf

RUN chmod 777 -R /app/application/config/

RUN service apache2 restart

EXPOSE 80 3306

CMD /bin/bash
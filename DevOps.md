1. How to cheek which user in the system is logged in?

```shell 
echo "$USER"

# or 
whoami

#or 
id -u

```

2. Does Docker like a virtual machine?  
__Docker isn't a virtual machine - it is a configuration management tool.__

3. What type of services provides Amazon?  
- __IaaS__ Infrastructure as a Service. 
- __PaaS__ Platform as a Service  
- __SaaS__ Software as a Service

__Инфраструктура как услуга (IaaS).__
Модель «инфраструктура как услуга», сокращенно IaaS, включает в себя базовые элементы для построения облачной ИТ-системы. В рамках этой модели пользователи получают доступ к сетевым ресурсам, к виртуальным компьютерам или выделенному аппаратному обеспечению, а также к хранилищам данных. Модель «инфраструктура как услуга» обеспечивает наивысший уровень гибкости эксплуатации и управления ИТ-ресурсами. Она практически аналогична современной модели ИТ-ресурсов, привычной для персонала ИТ-отделов и разработчиков.  

__Платформа как услуга (PaaS):__
Модель «платформа как услуга» не требует от организации управления базовой инфраструктурой (обычно включающей оборудование и операционные системы) и позволяет посвятить все усилия разработке и управлению приложениями. Это повышает производительность работы, ведь вам больше не придется беспокоиться о приобретении материально-технических ресурсов, заниматься планированием мощности, обслуживанием ПО, установкой обновлений безопасности и выполнять другие трудоемкие задачи, необходимые для работы приложений.

__Программное обеспечение как услуга(SaaS):__
В рамках модели «программное обеспечение как услуга» пользователь получает завершенный продукт, работающий под управлением поставщика услуги. Обычно в этом случае речь идет о приложениях для конечных пользователей. При работе с моделью SaaS не нужно беспокоиться о поддержке сервиса или управлении базовой инфраструктурой и можно полностью сконцентрироваться на использовании определенного программного обеспечения. Всем известный пример приложения SaaS – веб-сервис электронной почты, позволяющий отправлять и получать электронные письма без необходимости управлять дополнениями к программному продукту или обслуживать серверы и операционные системы, на которых работает сервис.
![all services](https://i.ytimg.com/vi/Tu_AmhKOMH4/maxresdefault.jpg)

4. What type of services provides Google?

5. How to change to switch to superuser? 
_su_ - command is used to switch the current user o another user from SSH.
```bash 
su -

#or 

sudo su -root

# to login as root on Ubuntu 
sudo -i
```

6. What layer of ISO provide Security protocol?  
__6 Presentational__

7. How to check the number of running containers? 

8. What the port used to default ?  

__. В отличие от HTTP с TCP-портом 80, для HTTPS по умолчанию используется TCP-порт 443__  

9. Which command is used to check and correct network setting? 

- __ping 127.0.0.1__ - checking the availability of a given address
- __ipconfig__ or __ipconfig/all__ 
- __trancet \<destination host name or IP address\>__

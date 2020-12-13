# DevOps combines software development (Dev) and IT operations (Ops)

## Basic questions about the linux system and how to work with the file system

### 1. How to cheek which user in the system is logged in?

```shell
echo "$USER"

# or
whoami

#or
id -u
```

### 2. What type of services provides Amazon?
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

### 3. What type of services provides Google?

### 4. How to change to switch to superuser?

_su_ - command is used to switch the current user to another user from SSH.

```bash
su -

#or

sudo su -root

# to login as root on Ubuntu
sudo -i
```

### 5. What layer of ISO provide Security protocol?  
__6 Presentational__

### 6. Does Docker like a virtual machine?  
__Docker isn't a virtual machine - it is a configuration management tool.__

### 7. How to check the number of running docker containers?

### 8. What the port used to default in docker?  

__. В отличие от HTTP с TCP-портом 80, для HTTPS по умолчанию используется TCP-порт 443__

### 9. Which command is used to check and correct network setting? 

- __ping 127.0.0.1__ - checking the availability of a given address
- __ipconfig__ or __ipconfig/all__ 
- __trancet \<destination host name or IP address\>__

### 10. Уровни модели ISO ( Единицей нагрузки – PDU )

<img src="/img/OSI-model.png">

- 1 уровень **Физический**. PDU – бит. Кроме единиц и нулей физический уровень не знает ничего. На этом уровне работают провода, патч панели, сетевые концентраторы (хабы, которые сейчас уже сложно найти в привычных нам сетях), сетевые адаптеры. Именно сетевые адаптеры и ничего более из компьютера. Сам сетевой адаптер принимает последовательность бит и передает её дальше.

- 2 уровень **Канальный**. PDU - кадр (frame). На этом уровне появляется адресация. Адресом является MAC адрес. Канальный уровень ответственен за доставку кадров адресату и их целостность. В привычных нам сетях на канальном уровне работает протокол ARP. Адресация второго уровня работает только в пределах одного сетевого сегмента и ничего не знает о маршрутизации - этим занимается вышестоящий уровень. Соответственно, устройства, работающие на L2 - коммутаторы, мосты и драйвер сетевого адаптера.

- 3 уровень **Сетевой**. PDU - пакет. Наиболее распространенным протоколом тут является IP. Адресация происходит по IP-адресам, которые состоят из 32 битов. Протокол маршрутизируемый, то есть пакет способен попасть в любую часть сети через какое-то количество маршрутизаторов. На L3 работают маршрутизаторы.

- 4 уровень **Транспортный**. PDU - сегмент/датаграма. На этом уровне появляются понятия портов. Тут трудятся TCP и UDP. Протоколы этого уровня отвечают за прямую связь между приложениями и за надежность доставки информации. Например, TCP умеет запрашивать повтор передачи данных в случае, если данные приняты неверно или не все. Так же TCP может менять скорость передачи данных, если сторона приема не успевает принять всё (TCP Window Size).

- 5 уровень **Сеансовый**. PDU - данные. Управляет сеансом связи, обменом информации, правами. Протоколы - L2TP, PPTP.

- 6 уровень **Представительский**. PDU - данные. Преставление и шифрование данных. JPEG, ASCII, MPEG.

- 7 уровень **Прикладной**. PDU - данные. Самый многочисленный и разнообразный уровень. На нем выполняются все высокоуровненвые протоколы. Такие как POP, SMTP, RDP, HTTP и т.д. Протоколы здесь не должны задумываться о маршрутизации или гарантии доставки информации - этим занимаются нижестоящие уровни. На 7 уровне необходима лишь реализации конкретных действий, например получение html-кода или email-сообщения конкретному адресату.

### How you can see which kernel version a system is currently running

```bash 
$ uname -a
```

### How you can check a system current ID Address

```bash
$ ifconfig 

# or new tool 

addr show eth0
```

### How show the size of a directory's content on disk? 

```bash 
$ du -sh <folder_name>
```

### How check for open ports on Linux machines?

```
$ netstat -tulpn
```
# Didactic Solutions
<p align="center">
<a href="https://github.com/Sudo-Ed-Tech/Edtech" target="_blank"> 
    <img src="https://github.com/Sudo-Ed-Tech/Edtech/blob/main/lms_frontend/public/logown.png"> 
  </a> 
</p>

<p>
Didactic Solutions is a Corporate Training System. It has two modules eLearing Module (Learning Management System) and Corporate Training Module. 
</p>

<hr />

<h3 align="left">Languages, Framework, and Tools :</h3>
<p align="left"> 
  <a href="https://bestofreactjs.com/" target="_blank"> 
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="c" width="40" height="40"/> 
  </a>
  <a href="https://www.npmjs.com/" target="_blank"> 
    <img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" alt="c" width="40" height="40"/> 
  </a>
  <a href="https://www.w3schools.com/css/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
  </a> 
  <a href="https://www.python.org/" target="_blank"> 
  <img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg" alt="css3" width="40" height="40"/> 
  </a> 
  <a href="https://www.djangoproject.com/" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" alt="django" width="40" height="40"/> 
  <a href="https://git-scm.com/" target="_blank"> 
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
  </a> 
  <a href="https://www.w3.org/html/" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>  
</p>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=Sudo-Ed-Tech&label=Project%20views&color=0e75b6&style=flat" alt="Sudo-Ed-Tech" /> </p>
	 
<hr />	

### Features

	  
**Modules**
 - eLearning
 - Corporate Training

**eLearning modules** </br>
 - Teacher 
 - Student
 - Course

**Corporate Training**

 - Course Creator
 - Trainer
 - Student/Trainee
 - Training Session
 - Training Recording

<hr />

### Project Installation and Setup

**Step 00:** _Requirements Need to be installed before Setup_
<p align="left">
	<a href="https://www.npmjs.com/" target="_blank">
		<img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" alt="c" width="40" height="40"/> 
	</a>
	<a href="https://www.python.org/" target="_blank"> 
  		<img src="https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg" alt="css3" width="40" height="40"/> 
  	</a>
	<a href="https://git-scm.com/" target="_blank"> 
   		 <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
  	</a> 
</p>
<br/>

**Step 01:** _Clone the repository_
```javascipt
git clone https://github.com/Sudo-Ed-Tech/Edtech.git
```
<br/>

**Step 02:** _Open the repository in any text editor (VScode, Atom, etc)_

<br/>

**Step 03:** _Edit the  Edtech/lms_api/lms_api/settings.py file_
```javascript
DATABASES = {
		 'default': {
			'ENGINE': 'django.db.backends.mysql',
			'NAME': 'ctp',			#Create a database name 'ctp' in your MySql
			'USER': '****',			#Add Username here
			'PASSWORD': '****',		#Add Password for user
			'HOST': 'localhost',
			'PORT': '3306'
		    }
		}
```
_Or Alternatively replace the above block with this_

```javascript
DATABASES = {
		    'default': {
			'ENGINE': 'django.db.backends.sqlite3',
			'NAME': 'ctp',
		    }
		}
```

<br/>

**Step 04:** _Install dependencies/requirements_
We are using python Virtual Environment you can go for this or chose your own way. 
Go inside the Edtech and run

``` pip install -r requirements.txt```

**Or**
We have added the python virtual environment file too, You can activate the environment by the command (Run from Edtech)

for Linux   -- ``` source ctp/bin/activate```

for Windows -- ``` workon ctp/bin/activate``` or ``` workon ctp/bin/activate.sp1```

<br/>

**_All Steps after this will be performed inside the virtual environment (ctp)_**

**Step 05:** _Migrate the django models inside the database run the following commands from the direcotry Edtech/lms_api one after another_

``` python manage.py makemigrations```

``` python manage.py migrate```

<br/>

**Step 06:** _Now, let's create Admin user for Backend, go inside the Edtech/lms_api and run_

``` python manage.py createsuperuser ``` _---complete the process_ </br>
**_Note: This usename:password will be used to access the admin module_**

<br/>

**Step 07:** _After acticating the environment and admin user, go inside the Edtech/lms_api and run_

``` python manage.py runserver``` **_or_** ``` python3 manage.py runserver```

<br/>

**Step 08:** _Now, Open another tab or window in terminal
go inside to the Edtech/lms_frontend and start the frontend by the command_

``` npm start```   _---(this project is build on Ubuntu, so this command will work on Linux)_

_if you got any error on Windwos , then install the react-script in the Edtech/lms_frontend_

``` npm install react-scripts --save```

_followed by_

``` npm start```

<br/>

**Step 09:** _Visit the http://127.0.0.1:8000/admin/  -- [Backend] </br>
Login with the Super User (Admin) credentials </br>
This is the Backend_

<br/>

**Step 10:** _Visit the http://127.0.0.1:3000/  -- [Frontend]</br>
This is the Fronend_

<br/>

**_We are done here with the installation._** :+1: 

<hr />

### Team
 - [Khan Sana](https://github.com/KhanSanaParveen) 
 - [Khan Muskan](https://github.com/muskan-1) 
 - [Shaikh Zikra](https://github.com/zikrashaikh08) 
 - [Aftab Harun](https://github.com/7absec)

<hr />
<h3 align="left">Connect with Us:</h3>
<p align="left">
	<a href="https://twitter.com/7absec" target="blank">
		<img src="https://img.shields.io/twitter/follow/7absec?logo=twitter&style=for-the-badge" alt="7absec" />
	</a> 
</p>
<a href="https://www.buymeacoffee.com/7absec" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>


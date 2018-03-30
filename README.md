# Smart India Hackathon, 2018

## Introduction

> This is the back-end API setup for the GIS-GPS based connection estimation generation project deployed in conjuction with the specifics defined in the respective SRS document to allow for the same.

## Installation and Running

> npm install

> npm start

## Routes

Method | Route Address | Input Parameters | Output JSON Expectation
--- | --- | --- | ---
GET | / | None | Welcome Message
POST | /auth/register | fullName, userName, email, phone, passEnter, passConfirm | Success/Error Message
GET | /auth/verify/:username/:code | None | Success/Error Message
POST | /auth/verify/phone/:username | otp | Success/Error Message
POST | /auth/login | username, password | Success Message -> Token or Error Message
GET | /auth/logout | token (Header: x-access-token) or Params | Success/Error Message
POST | /auth/change-password | token, oldPassword, newPassword | Success/Error Message
GET | /matrix/vector | from, to | Location Data (Ajax - Google)

## To-do List

* Passport / Oauth Integration

* Finalize models.

* Organize client side redirects.

* Set up generalized rand generation.

## Application URL

> https://api-egn.nvixion.tech

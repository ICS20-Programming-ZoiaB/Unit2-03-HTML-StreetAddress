// Copyright (c) 2022 ZoiaB All rights reserved
//
// Created by: ZoiaB
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get street name from text field
  let streetname = document.getElementById("street name").value
	// get age from text field and cast it to integer
  let streetname = parseInt(document.getElementById("streetname-entered").value)

  // display street name and street number back to user
  document.getElementById('user-info').innerHTML = "Your street name is " + streetNumber + streetName + "!"
}

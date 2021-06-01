import axios from "axios";
import React, {useEffect, useState} from "react"



export default {
  getData: function() {
    return  axios.get("https://randomuser.me/api/?results=200")
    }
};


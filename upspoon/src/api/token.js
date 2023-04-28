import axios from "axios";
import { resolve } from "./resolve.js";
import { apiUrl } from "../constants/apiUrl.js";
import * as querystring from "querystring";

const tokenUrl = `${apiUrl}/oauth2/token`;

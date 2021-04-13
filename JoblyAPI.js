import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get details on all companies by data provided */
  static async getCompanies(data) {
    let res = await this.request('companies', data);
    return res.companies;
  }

  /** Add a company with data provided */
  static async addCompany(data) {
    let res = await this.request('companies', data, 'post');
    return res.company;
  }

  /** Patch a company with data provided */
  static async updateCompany(handle, data) {
    let res = await this.request(`companies/${handle}`, data, 'patch');
    return res.company;
  }

  /** Delete a company */
  static async deleteCompany(handle) {
    let res = await this.request(`companies/${handle}`, {}, 'delete');
    return res.deleted;
  }

  /** Get details on all jobs, by data provided */
  static async getJobs(data) {
    let res = await this.request('jobs', data);
    return res.jobs;
  }

  /** Get details on all jobs, by data provided */
  static async getJob(id, data) {
    let res = await this.request(`jobs/${id}`, data);
    return res.jobs;
  }
  
    /** Add a job with data provided. */
  static async addJob(data) {
    let res = await this.request('jobs', data, 'post');
    return res.job;
  }

  /** Patch a job with data provided */
  static async updateJob(id, data) {
    let res = await this.request(`jobs/${id}`, data, 'patch');
    return res.job;
  }

  /** Delete a job  */
  static async deleteJob(id) {
    let res = await this.request(`jobs/${id}`, {}, 'delete');
    return res.deleted;
  }

  /** Get details on all users, by data provided */
  static async getUsers(data) {
    let res = await this.request('users', data);
    return res.users;
  }

  /** Get details on all user, by data provided */
  static async getUser(username, data) {
    let res = await this.request(`users/${username}`, data);
    return res.user;
  }
  
    /** Add a job with data provided. */
  static async addUser(data) {
    let res = await this.request('users', data, 'post');
    return res.user;
  }

  /** Patch a job with data provided */
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }

  /** Delete a job  */
  static async deleteUser(username) {
    let res = await this.request(`users/${username}`, {}, 'delete');
    return res.deleted;
  }

  static async applyUserToJob(username, id){
    let res = await this.request(`users/${username}/jobs/${id}`, {}, 'post');
    return res.applied;
  }
  
  static async login(data) {
    let res = await this.request(`auth/token`, data, 'post');
    return res.token;
  }

  static async signup(data) {
    let res = await this.request(`auth/register`, data, 'post');
    return res.token;
  }
}
// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
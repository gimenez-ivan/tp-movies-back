import { Profile } from "../models/index.js"


class ProfileController {
  constructor() {
    this.Profile = Profile;
  }
  getProfileById = async (req, res) => {
    // re
  }

  getProfileByUserId = async (req, res) => {
    //
  }

  createProfile = async (req, res) => {
    //
  }
  updateProfile = async (req, res) => {
    //
  }

  // Solo el admin podría eliminar perfiles
  deleteProfile = async (req, res) => {
    //
  }

}

export default ProfileController;

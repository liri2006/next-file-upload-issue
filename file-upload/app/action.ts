"use server";

export async function myAction(_currentState: any, formData: FormData) {
  try {
    console.log("Server side!");
  } catch (e) {
    console.log("SERVER ERROR!!!");
  }
}

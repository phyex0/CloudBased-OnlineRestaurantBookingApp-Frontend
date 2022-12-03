import client from "./index";
const url = `organization/api/create-restaurant`;

export const createOrganization = async (
  organizationId = "490a5185-77dd-480b-9709-6a3fe42104dc"
) => {
  try {
    const response = await client.post(`organization/api/create-restaurant?organizationId=${organizationId}`,
      {
        organizationId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        organizationName: 'string',
        packageService: 'NO_CARRIER',
        fullAddress: 'string',
        restaurant: true,
        market: true,
        booking: true,
      }
    );
    console.log(response);
    return response.data;
  } catch (err) {
    // return error to user
    console.log(err);
    return err;
  }
};

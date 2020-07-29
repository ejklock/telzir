import * as Yup from 'yup';

export default class Validator {
  private schema: any;

  private data: any;

  constructor(schema, data) {
    this.schema = schema;
    this.data = data;
  }

  async Validate() {
    try {
      await this.schema.validate(this.data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        throw validationErrors;
      }
    }
  }
}

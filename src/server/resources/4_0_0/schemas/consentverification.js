/**
 * @name exports
 * @summary ConsentVerification Class
 */
module.exports = class ConsentVerification {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, '_verified', {
			enumerable: true,
			get: () => this.__data._verified,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._verified = new Element(value);
			},
		});

		Object.defineProperty(this, 'verified', {
			enumerable: true,
			get: () => this.__data.verified,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.verified = value;
			},
		});

		Object.defineProperty(this, 'verifiedWith', {
			enumerable: true,
			get: () => this.__data.verifiedWith,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.verifiedWith = new Reference(value);
			},
		});

		Object.defineProperty(this, '_verificationDate', {
			enumerable: true,
			get: () => this.__data._verificationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._verificationDate = new Element(value);
			},
		});

		Object.defineProperty(this, 'verificationDate', {
			enumerable: true,
			get: () => this.__data.verificationDate,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.verificationDate = value;
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'ConsentVerification',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'ConsentVerification';
	}

	toJSON() {
		return {
			id: this.id,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			_verified: this._verified && this._verified.toJSON(),
			verified: this.verified,
			verifiedWith: this.verifiedWith && this.verifiedWith.toJSON(),
			_verificationDate: this._verificationDate && this._verificationDate.toJSON(),
			verificationDate: this.verificationDate,
		};
	}
};

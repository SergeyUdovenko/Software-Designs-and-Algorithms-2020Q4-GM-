const path = require('path');
const fs = require('fs');

const PropertyUtil = require('./lib/PropertyUtil');
const InvalidFileTypeError = require('./lib/InvalidFileTypeError');
const InvalidDirectoryException = require('./lib/InvalidDirectoryException');
const FileExtensionPredicate = require('./FileExtensionPredicate');

const VALID_IMAGE_TYPES  = ['jpg', 'png'];
const VALID_DOCUMENT_TYPES = ['pdf', 'doc'];

module.exports = class FileManager {
    constructor() {
        this.basePath = PropertyUtil.loadProperty('basePath');
    }

    getFile(fileName) {
        this.validateFileType(fileName);
        const directoryPath = this.basePath + path.separator;
        return path.resolve(directoryPath, fileName);
    }

    getAllImages() {
        return this.getFiles(this.basePath, VALID_IMAGE_TYPES);
    }

    getAllDocumentFiles() {
        return this.getFiles(this.basePath, VALID_DOCUMENT_TYPES);
    }

    validateFileType(fileName) {
        if (this.isInvalidFileType(fileName)) {
            throw new InvalidFileTypeError('File type not Supported: ' + fileName);
        }
    }

    isInvalidFileType(fileName) {
        return this.isInvalidImage(fileName) && this.isInvalidDocument(fileName);
    }

    isInvalidImage(fileName) {
        const imageExtensionsPredicate = new FileExtensionPredicate(VALID_IMAGE_TYPES);
        return !imageExtensionsPredicate.checkExtension(fileName);
    }

    isInvalidDocument(fileName) {
        const documentExtensionsPredicate = new FileExtensionPredicate(VALID_DOCUMENT_TYPES);
        return !documentExtensionsPredicate.checkExtension(fileName);
    }

    getFiles(directoryPath, allowedExtensions) {
        const fileExtensionPredicate = new FileExtensionPredicate(allowedExtensions);
        return this.getDirectory(directoryPath).filter((extension) => {
            return fileExtensionPredicate.checkExtension(extension);
        });
    }

    getDirectory(directoryPath) {
        const stats = fs.statSync(directoryPath);
        this.validateDirectory(stats, directoryPath);
        return fs.readdirSync(directoryPath);
    }

    validateDirectory(stats, directoryPath) {
        if (this.isNotDirectory(stats)) {
            throw new InvalidDirectoryException('Invalid directory found: ' + directoryPath);
        }
    }

    isNotDirectory(stats) {
        return !stats.isDirectory();
    }
};

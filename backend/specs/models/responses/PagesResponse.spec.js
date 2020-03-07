const { IResponse } = require('../../../src/models/responses/IResponse')
const { PagesResponse } = require('../../../src/models/responses/PagesResponse')
const assert = require('assert')
describe('PagesResponse', function () {
    it('should be instance of IResponse', function () {
        const pageResponse = new PagesResponse()
        assert.ok(pageResponse instanceof IResponse)
    })

    it('should impement toFormat', function () {
        const pageResponse = new PagesResponse()
        assert.doesNotThrow(() => {
            pageResponse.toFormat()
        })
    })

    it('should have no headers"', function () {
        const pageResponse = new PagesResponse()
        assert.strictEqual(Object.keys(pageResponse.getHeaders()).length, 0)
    })

    it('should format to "text/html"', function () {
        const pageResponse = new PagesResponse()
        const formatResponse = pageResponse.toFormat()
        assert.ok(formatResponse['text/html'])
        assert.strictEqual(typeof formatResponse['text/html'], 'string')
    })

    it('should format "application/json" should contain success property', function () {
        const pageResponse = new PagesResponse()
        const formatResponse = pageResponse.toFormat()
        const jsonApplication = formatResponse['application/json']
        assert.ok(jsonApplication)
        assert.ok(Object.hasOwnProperty.call(jsonApplication, 'success'))
    })

    it('should format "application/json" should contain pages property', function () {
        const pageResponse = new PagesResponse()
        const formatResponse = pageResponse.toFormat()
        const jsonApplication = formatResponse['application/json']
        assert.ok(jsonApplication)
        assert.ok(Object.hasOwnProperty.call(jsonApplication, 'pages'))
        assert.ok(Array.isArray(jsonApplication.pages))
    })

    it('should profide pages in  "application/json" format', function () {
        const pageResponse = new PagesResponse()
        pageResponse.addPage('Test Page1', 'this is a test page1', 'img1')
        pageResponse.addPage('Test Page2', 'this is a test page2', 'img2')
        pageResponse.addPage('Test Page3', 'this is a test page3', 'img3')
        const formatResponse = pageResponse.toFormat()
        const jsonApplication = formatResponse['application/json']
        assert.strictEqual(jsonApplication.pages.length, 3)
    })

    it('should profide pages in  "text/html" format', function () {
        const pageResponse = new PagesResponse()
        pageResponse.addPage('Test Page1', 'this is a test page1', 'img1')
        pageResponse.addPage('Test Page2', 'this is a test page2', 'img2')
        pageResponse.addPage('Test Page3', 'this is a test page3', 'img3')
        const formatResponse = pageResponse.toFormat()
        const textHtml = formatResponse['text/html']
        assert.ok(textHtml.indexOf('Test Page1') > -1)
        assert.ok(textHtml.indexOf('Test Page2') > -1)
        assert.ok(textHtml.indexOf('Test Page3') > -1)
    })
})

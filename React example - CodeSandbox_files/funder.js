(function () {
  let timeout;

  function init(attempts) {
    clearTimeout(timeout)
    attempts = attempts || 1
    if (attempts > 3) return
    if (typeof CodeFundAd === 'undefined') {
      timeout = setTimeout(function () { init(attempts + 1) }, 350)
      return
    }
    new CodeFundAd({"selector":"#codefund_ad","template":"rectangle-narrow","theme":"dark","fallback":true,"urls":{"impression":"https://codefund.app/display/c3ddc376-8ed2-4ad4-ac32-3011590af8d1.gif","campaign":"https://codefund.app/impressions/c3ddc376-8ed2-4ad4-ac32-3011590af8d1/click?campaign_id=804\u0026creative_id=710\u0026property_id=24\u0026template=rectangle-narrow\u0026theme=dark","poweredBy":"https://codefund.app/invite/3EBQHXsnOfE","adblock":"https://cdn2.codefund.app/assets/px.js","uplift":"https://codefund.app/impressions/c3ddc376-8ed2-4ad4-ac32-3011590af8d1/uplift?advertiser_id=735"},"creative":{"name":"Join CPN (Fallback)","headline":"Host a tech podcast?","body":"Learn the benefits of joining the CodeFund Podcast Network 🎧","cta":"See Benefits","imageUrls":{"icon":"https://cdn2.codefund.app/b0g7zp19jxzpfiu9lpxxzprmjtoj","small":"https://cdn2.codefund.app/u1gollegeqah6wclbvep1k5p0hg1","large":"https://cdn2.codefund.app/vsps0wsr3880bb1olpgncx6wb7qi","wide":"https://cdn2.codefund.app/21v8d4ba9pzb1eljng4lunahmatw"}}})
  }

  const codefundStylesheetId = 'codefund-style'
  const codefundScriptId = 'codefund-script'

  if (!document.getElementById(codefundStylesheetId)) {
    const stylesheet = document.createElement('link')
    stylesheet.setAttribute('id', codefundStylesheetId)
    stylesheet.setAttribute('rel', 'stylesheet')
    stylesheet.setAttribute('media', 'all')
    stylesheet.setAttribute('href', 'https://codefund.app/packs/css/code_fund_ad-dd6c03f5.css')
    stylesheet.addEventListener('load', init)
    document.head.appendChild(stylesheet)
  }

  if (document.getElementById(codefundScriptId)) {
    init()
  } else {
    const script = document.createElement('script')
    script.setAttribute('id', codefundScriptId)
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://codefund.app/packs/js/code_fund_ad-88da4459b326c77fb0ce.js')
    script.addEventListener('load', init)
    document.head.appendChild(script)
  }
})()

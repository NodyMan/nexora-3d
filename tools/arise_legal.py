"""English legal texts for arise.nexorastudio.world (privacy, terms, delete account).
Ported from nexora-site/content/en.py. Placeholders: {owner} {email} {city} {privacy_url} {delete_url}."""

PRIVACY = {'title': 'Privacy Policy',
 'description': 'How Arise collects, uses and protects your personal data.',
 'intro': '<p>This Privacy Policy explains what personal data the Arise mobile app (“Arise”, “we”, “us”) collects, why we collect it, who '
          'we share it with and what choices you have. Arise is made by Nexora Studio, operated by {owner}, an independent developer based '
          'in {city}.</p><p>Short version: we collect only what Arise needs to give you study advice, we don’t sell your data, we don’t '
          'show ads, and you can delete your account and data at any time inside the app.</p>',
 'sections': [('1. Who is responsible for your data',
               '<p>Nexora Studio, operated by {owner}, {city}. Contact: <a href="mailto:{email}">{email}</a>.</p>'),
              ('2. What we collect',
               '<p><strong>Account data.</strong> Depending on how you sign in:</p><ul><li>Email sign-up: your name, email address and '
               'password (the password is stored only as a secure hash by our authentication provider).</li><li>Google sign-in: your name, '
               'email address and Google account ID.</li><li>Sign in with Apple: your name (if you share it), email address or Apple '
               'private relay address, and Apple account ID.</li><li>Guest mode: an anonymous ID only.</li></ul><p><strong>Age and '
               'consent.</strong> Your year of birth, whether a parent or guardian agreed (for users aged 13–15), and the date you '
               'accepted these terms.</p><p><strong>Your answers in the app.</strong> Interests and the text you write about yourself, the '
               'direction and career you choose, saved and dream universities, and your portfolio (grades, test scores, certificates, '
               'projects and motivation letter).</p><p><strong>Results created for you.</strong> Your AI analysis, skill plan, letter '
               'review, project ideas and your chat with Ari.</p><p><strong>Progress.</strong> XP, completed skills and '
               'streaks.</p><p><strong>Technical data.</strong> Counters of AI requests (to apply daily limits) and standard server logs '
               'kept by our hosting providers, which can include IP address, device and app version.</p><p><strong>Photos and voice '
               '(iPhone).</strong> If you use “Scan document” or send a voice message to Ari, the photo or recording is sent to Google '
               'Gemini only to read it. Arise does not store the photo or the recording; it saves only the text you confirm and Ari’s '
               'reply.</p><p>We do <strong>not</strong> collect your location, contacts, photo library or advertising IDs. Reminders and '
               'calendar events are created only on your device.</p>'),
              ('3. How we use it',
               '<ul><li>To run Arise: create your account, save your answers and show your plan and progress.</li><li>To generate personal '
               'recommendations with AI (see section 4).</li><li>To show the weekly leaderboard: only your first name, the first letter of '
               'your last name and your XP are visible to other users.</li><li>To keep Arise safe: prevent abuse and apply fair-use '
               'limits.</li><li>To answer your support requests.</li></ul><p>We process your data because you asked us to provide the '
               'service (contract) and because you consented when you started using Arise. We do not use your data for advertising and we '
               'do not sell it.</p>'),
              ('4. AI processing',
               '<p>Arise uses the Google Gemini API to create recommendations. When you use an AI feature, the relevant part of your '
               'profile (for example interests, chosen direction, portfolio or motivation letter) and your messages to Ari are sent to '
               'Google for processing. We use Gemini under Google’s paid API terms, under which Google does not use this content to train '
               'its models.</p><p>Please don’t share sensitive information (such as health data, passport numbers or passwords) in free '
               'text or in the chat.</p><p>AI results are estimates. They may be wrong and are not a guarantee of admission or of any '
               'salary.</p>'),
              ('5. Who we share data with',
               '<p>We share data only with service providers that help us run Arise, and only as '
               'needed:</p><ul><li><strong>Supabase</strong> — database, authentication and server '
               'functions.</li><li><strong>Google</strong> — Gemini AI processing (including documents you scan and voice messages to '
               'Ari); Google Sign-In if you choose it.</li><li><strong>Apple</strong> — Sign in with Apple, if you choose '
               'it.</li><li><strong>Vercel</strong> — hosting of this website.</li><li><strong>Cloudflare</strong> — domain name service and our support email.</li></ul><p>We may disclose data '
               'if the law requires it. If Nexora Studio is ever reorganised or sold, this policy will continue to protect your data, and '
               'we will tell you first.</p>'),
              ('6. Where your data is stored',
               '<p>Your data is stored in data centres of our provider Supabase, which may be located outside Uzbekistan. Data is '
               'encrypted in transit (HTTPS), and database access rules let each user read only their own data.</p>'),
              ('7. How long we keep it',
               '<p>We keep your data while your account exists. When you delete your account, your data is removed from our live database '
               'immediately. Copies in backups are erased within 30 days. AI request counters are kept only as long as needed to apply '
               'limits.</p>'),
              ('8. Your rights and choices',
               '<ul><li><strong>See and change</strong> your answers and portfolio in the app at any time.</li><li><strong>Delete</strong> '
               'your account and all data: Profile → Delete account, or see <a href="{delete_url}">how to delete your '
               'account</a>.</li><li><strong>Get a copy</strong> of your data or ask any question by writing to <a '
               'href="mailto:{email}">{email}</a>.</li><li><strong>Withdraw consent</strong> at any time by deleting your '
               'account.</li><li><strong>Complain</strong> to the data protection authority in your country.</li></ul><p>We answer '
               'requests within 30 days.</p>'),
              ('9. Children',
               '<p>Arise is for people aged <strong>13 and older</strong>. Users aged 13 to 15 may use Arise only with the agreement of a '
               'parent or guardian, which we ask for when the account is set up. If we learn that a user is under 13, we delete the '
               'account and its data. Parents and guardians can contact us at <a href="mailto:{email}">{email}</a> to review or delete '
               'their child’s data.</p>'),
              ('10. Security',
               '<p>We use encrypted connections, row-level security in the database and keep secret keys only on the server, never in the '
               'app. No system is perfectly secure; if a breach affects you, we will tell you and the relevant authorities as the law '
               'requires.</p>'),
              ('11. Changes to this policy',
               '<p>If we change this policy, we will update the date above. If the changes are important, we will tell you in the app '
               'before they apply.</p>'),
              ('12. Contact', '<p>Nexora Studio · {city} · <a href="mailto:{email}">{email}</a></p>')]}

TERMS = {'title': 'Terms of Use',
 'description': 'The rules for using the Arise app.',
 'intro': '<p>These Terms of Use (“Terms”) are an agreement between you and Nexora Studio, operated by {owner} (“we”, “us”), for the Arise '
          'mobile app (“Arise”). By creating an account or using Arise, you agree to these Terms and to our <a '
          'href="{privacy_url}">Privacy Policy</a>.</p>',
 'sections': [('1. Who can use Arise',
               '<p>You must be at least 13 years old. If you are 13 to 15, a parent or guardian must agree to these Terms for you. If you '
               'are under 13, please don’t use Arise.</p>'),
              ('2. Your account',
               '<p>Give accurate information and keep your sign-in details safe. You are responsible for what happens in your account. '
               'Guest accounts are stored only on this device’s session — if you sign out or delete the app, a guest account can be '
               'lost.</p>'),
              ('3. What Arise is — and isn’t',
               '<p>Arise gives guidance to help you choose a direction, find universities and prepare your application. Recommendations, '
               'match scores, admission chances, salaries and deadlines are <strong>estimates</strong> generated by AI and from public '
               'sources. They can be incomplete, outdated or wrong.</p><p>Arise does <strong>not</strong> guarantee admission, '
               'scholarships or jobs, and it is not a replacement for official information from universities or advice from teachers, '
               'counsellors or parents. Always check requirements and deadlines on the university’s official website.</p>'),
              ('4. Fair use',
               '<p>Please don’t:</p><ul><li>break the law or the rights of others, or upload someone else’s personal data;</li><li>harass, '
               'threaten or deceive other users;</li><li>try to hack, overload, copy or reverse-engineer Arise, or bypass '
               'limits;</li><li>use Arise to produce documents you present as fully your own work where that is not allowed — letter '
               'feedback is for improving your own writing.</li></ul><p>We may limit or close accounts that break these rules.</p>'),
              ('5. Your content',
               '<p>What you write and upload (answers, portfolio, letters, messages) stays yours. You give us permission to store and '
               'process it only to provide Arise to you, as described in the Privacy Policy. You can delete it at any time.</p>'),
              ('6. Our content',
               '<p>The Arise name, logo, design and software belong to Nexora Studio. The world universities list is based on the open <a '
               'href="https://github.com/Hipo/university-domains-list" rel="noopener">Hipo university domains list</a> (MIT License).</p>'),
              ('7. Price',
               '<p>Arise is free to use today. If we add paid features in the future, we will show the price clearly before you pay, and '
               'the store’s payment and refund rules will apply.</p>'),
              ('8. Changes and availability',
               '<p>We are improving Arise all the time, so features may change. We try to keep Arise available but can’t promise it will '
               'always work without interruption.</p>'),
              ('9. Ending your use',
               '<p>You can stop using Arise and delete your account at any time (Profile → Delete account). We may suspend accounts that '
               'seriously or repeatedly break these Terms.</p>'),
              ('10. Liability',
               '<p>Arise is provided “as is”. To the extent the law allows, we are not responsible for decisions you make based on '
               'recommendations in Arise or for indirect losses. Nothing in these Terms limits rights you have under consumer protection '
               'law.</p>'),
              ('11. Law',
               '<p>These Terms are governed by the laws of the Republic of Uzbekistan. If you live in another country, you also keep the '
               'protections of your local consumer law.</p>'),
              ('12. Changes to these Terms',
               '<p>If we change these Terms, we will update the date above and tell you in the app about important changes before they '
               'apply.</p>'),
              ('13. Contact', '<p>Nexora Studio · {city} · <a href="mailto:{email}">{email}</a></p>')]}

DELETE = {'title': 'Delete your Arise account',
 'description': 'How to delete your Arise account and all your data.',
 'intro': '<p>You can delete your Arise account and all your data at any time. Deletion is permanent and can’t be undone.</p>',
 'sections': [('In the app (fastest)',
               '<ol><li>Open Arise and go to the <strong>Profile</strong> tab.</li><li>Scroll down and tap <strong>Delete '
               'account</strong>.</li><li>Read the warning and tap <strong>Yes, delete forever</strong>.</li></ol><p>Your account is '
               'deleted immediately and you are signed out.</p>'),
              ('Without the app',
               '<p>Send an email to <a href="mailto:{email}?subject=Delete%20my%20Arise%20account">{email}</a> with the subject '
               '<strong>“Delete my Arise account”</strong>. Write from the email address you use in Arise, or tell us how you sign in '
               '(Google or Apple). We will confirm and delete the account within 7 days.</p>'),
              ('What is deleted',
               '<ul><li>Your account and sign-in details</li><li>Your profile, interests, chosen direction and universities</li><li>Your '
               'portfolio and motivation letter</li><li>AI analysis, skill plan, letter reviews, project ideas and Ari chat '
               'history</li><li>XP, skill progress, streaks and leaderboard entries</li></ul><p>Data is removed from our live database '
               'immediately; backup copies are erased within 30 days. We don’t keep any of your data after that, unless the law requires '
               'it.</p>'),
              ('Only want to start over?',
               '<p>In Profile you can also tap <strong>Start setup again</strong> to redo the questionnaire without deleting your '
               'account.</p>')]}

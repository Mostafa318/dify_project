{
    'name': 'Project Dify Chatbot',
    'version': '18.0.1.0.0',
    'summary': 'Add Dify AI chatbot to Project module for project guidance',
    'description': """
        This module integrates Dify AI chatbot into Odoo's Project module.
        Users can chat with AI assistant to get guidance about:
        - Project planning and setup
        - Best practices for project management  
        - Understanding project workflows
        - Getting help before creating projects
    """,
    'category': 'Project',
    'author': 'Your Name',
    'website': 'https://yourwebsite.com',
    'depends': ['project', 'web'],
    'data': [
        'views/project_chatbot_templates.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'static/src/js/project_chatbot.js',
            'static/src/css/project_chatbot.css',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}

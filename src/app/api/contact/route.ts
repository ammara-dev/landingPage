import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Contact form schema type
interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    const { name, email, phone, subject, message } = body

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content for admin
    const adminMailOptions = {
      from: `"Heights Country Club Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Outfit', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b, #d97706); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .field-value { color: #1f2937; font-size: 16px; margin-top: 5px; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 10px; }
            .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏡 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${subject}</div>
              </div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from The Heights Country Club & Wellness website contact form.</p>
              <p>© ${new Date().getFullYear()} The Heights Country Club. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Auto-reply email to the user
    const userMailOptions = {
      from: `"The Heights Country Club" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting The Heights Country Club & Wellness",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Outfit', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b, #d97706); padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 28px; }
            .header p { color: rgba(255,255,255,0.9); margin-top: 10px; }
            .content { background: #ffffff; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; }
            .content h2 { color: #1f2937; margin-top: 0; }
            .content p { color: #4b5563; }
            .highlight-box { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 14px 30px; text-decoration: none; border-radius: 30px; font-weight: 600; margin: 20px 0; }
            .footer { background: #1f2937; color: #9ca3af; padding: 30px; text-align: center; border-radius: 0 0 10px 10px; font-size: 13px; }
            .footer a { color: #f59e0b; text-decoration: none; }
            .social-links { margin: 20px 0; }
            .social-links a { display: inline-block; margin: 0 10px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>The Heights Country Club</h1>
              <p>& Wellness by Emaar</p>
            </div>
            <div class="content">
              <h2>Thank You, ${name}!</h2>
              <p>We appreciate you reaching out to us regarding <strong>${subject}</strong>. Your inquiry is important to us, and our team will review your message promptly.</p>
              
              <div class="highlight-box">
                <strong>What happens next?</strong><br>
                A member of our sales team will contact you within 24 hours to discuss your requirements and answer any questions you may have.
              </div>
              
              <p>In the meantime, feel free to explore our exclusive collection of villas at The Heights Country Club & Wellness — a premium residential community nestled within Dubai Hills Estate.</p>
              
              <center>
                <a href="https://heightscountryclub.ae" class="cta-button">Explore Our Properties →</a>
              </center>
              
              <p>If you need immediate assistance, please don't hesitate to call us at <strong>+971 4 123 4567</strong>.</p>
              
              <p style="margin-top: 30px;">Warm regards,<br><strong>The Heights Country Club Team</strong></p>
            </div>
            <div class="footer">
              <p><strong>The Heights Country Club & Wellness</strong></p>
              <p>Dubai Hills Estate, Mohammed Bin Rashid City<br>Dubai, United Arab Emirates</p>
              <div class="social-links">
                <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">LinkedIn</a>
              </div>
              <p style="margin-top: 20px; font-size: 11px; color: #6b7280;">
                © ${new Date().getFullYear()} The Heights Country Club. All rights reserved.<br>
                This email was sent in response to your contact form submission.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}

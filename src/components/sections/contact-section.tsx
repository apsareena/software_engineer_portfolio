/**
 * contact-section.tsx: Contact information section
 *
 * Renders a full-width section containing contact detail cards (email, phone,
 * location) and social media links.
 *
 * Dependencies: @mui/material, FadeIn, ContactCard, SocialLinks, app-constants
 * Used by: app/page.tsx
 */

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import FadeIn from '@/components/animations/fade-in';
import ContactCard from '@/components/contact/contact-card';
import SocialLinks from '@/components/contact/social-links';
import { SECTION_CONTACT } from '@/constants/app-constants';
import type { ContactInfo } from '@/types/portfolio';

/** Props for the ContactSection component */
interface ContactSectionProps {
  /** Contact data loaded from contact.json */
  contact: ContactInfo;
}

/**
 * Renders the Contact section with email, phone, location cards and social links.
 *
 * @param contact - ContactInfo object with all available contact details
 */
export default function ContactSection({ contact }: ContactSectionProps) {
  return (
    <Box
      id={SECTION_CONTACT}
      component="section"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#F8F9FA' }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <FadeIn>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ color: '#2C3E50', fontWeight: 700, mb: 1.5 }}>
              Get In Touch
            </Typography>
            <Box
              sx={{ width: 60, height: 4, backgroundColor: '#3498DB', mx: 'auto', borderRadius: 2 }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 480, mx: 'auto' }}>
              I&apos;m open to new opportunities. Feel free to reach out!
            </Typography>
          </Box>
        </FadeIn>

        {/* Contact cards + social links */}
        <FadeIn delay={0.2}>
          <Box sx={{ maxWidth: 640, mx: 'auto' }}>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {/* Email card */}
              <Grid size={{ xs: 12 }}>
                <ContactCard type="email" value={contact.email} />
              </Grid>

              {/* Phone card – only if phone is provided */}
              {contact.phone && (
                <Grid size={{ xs: 12, sm: 6 }}>
                  <ContactCard type="phone" value={contact.phone} />
                </Grid>
              )}

              {/* Location card – only if location is provided */}
              {contact.location && (
                <Grid size={{ xs: 12, sm: contact.phone ? 6 : 12 }}>
                  <ContactCard type="location" value={contact.location} />
                </Grid>
              )}
            </Grid>

            {/* Social media links */}
            <SocialLinks contact={contact} />
          </Box>
        </FadeIn>
      </Container>
    </Box>
  );
}
